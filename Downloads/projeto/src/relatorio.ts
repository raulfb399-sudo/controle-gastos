import { CATEGORIAS } from './tipos.js';
import { Despesa } from './tipos.js';
import { totalGasto, maiorDespesa } from './despesas.js';

type Categoria = typeof CATEGORIAS[number];

// 1. Função: Descrição Categoria
export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case 'alimentação':
      return 'Alimentação';
    case 'transporte':
      return 'Transporte';
    case 'lazer':
      return 'Lazer';
    case 'moradia':
      return 'Moradia';
    default:
      return categoria;
  }
}

// 2. Função: Matriz Categoria Mês
export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];
  
  // Inicializa matriz 4x12 com zeros
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // Popula a matriz usando o laço estruturado tradicional
  for (const despesa of despesas) {
    let indiceCategoria = -1;
    
    for (let c = 0; c < CATEGORIAS.length; c++) {
      if (CATEGORIAS[c] === despesa.categoria) {
        indiceCategoria = c;
        break;
      }
    }

    const indiceMes = despesa.mes - 1;
    const linhaAlvo = matriz[indiceCategoria];

    // Atribuição segura com verificação de existência contra riscos de tipo
    if (linhaAlvo && indiceMes >= 0 && indiceMes < 12) {
      linhaAlvo[indiceMes] = (linhaAlvo[indiceMes] || 0) + despesa.valor;
    }
  }

  return matriz;
}

// 3. Função: Formatar Relatório
export function formatarRelatorio(despesas: Despesa[]): string {
  // Uso do método de string .toUpperCase() para garantir o título em maiúsculas
  let texto = '========================================\n';
  texto += '           RELATÓRIO DE GASTOS          \n'.toUpperCase();
  texto += '========================================\n';

  // Monta as linhas por categoria acumulando os totais do ano
  for (const cat of CATEGORIAS) {
    const despesasDaCat = despesas.filter(d => d.categoria === cat);
    const totalDaCat = despesasDaCat.reduce((sum, d) => sum + d.valor, 0);
    
    // Formata o nome da categoria com a primeira letra maiúscula
    const nomeExibivel = cat.charAt(0).toUpperCase() + cat.slice(1);
    
    // Uso dos métodos .toFixed(2) para moedas e .padStart() para alinhar visualmente
    const valorFormatado = `R$ ${totalDaCat.toFixed(2)}`;
    texto += `${nomeExibivel.padEnd(15)}: ${valorFormatado.padStart(12)}\n`;
  }

  texto += '----------------------------------------\n';

  // Calcula e adiciona o Total Geral do relatório
  const geral = totalGasto(despesas);
  texto += `TOTAL GERAL    : R$ ${geral.toFixed(2).padStart(12)}\n`;
  texto += '----------------------------------------\n';

  // Localiza e adiciona a maior despesa registrada
  const maior = maiorDespesa(despesas);
  if (maior === undefined) {
    texto += 'MAIOR DESPESA  : Nenhuma despesa registrada\n';
  } else {
    texto += `MAIOR DESPESA  : ${maior.descricao} (R$ ${maior.valor.toFixed(2)})\n`;
  }
  
  texto += '========================================';
  return texto;
}
