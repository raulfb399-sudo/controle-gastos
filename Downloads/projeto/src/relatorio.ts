import { CATEGORIAS } from './tipos.js';
import { Despesa } from './tipos.js';

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
  
  // Cria a estrutura da tabela 4x12 cheia de zeros
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // Preenche a matriz com os gastos reais
  for (const despesa of despesas) {
    let indiceCategoria = -1;
    
    for (let c = 0; c < CATEGORIAS.length; c++) {
      if (CATEGORIAS[c] === despesa.categoria) {
        indiceCategoria = c;
        break;
      }
    }

    const indiceMes = despesa.mes - 1;
    
    // Acessa a linha de forma segura
    const linhaAlvo = matriz[indiceCategoria];

    // Se a linha e o mês forem válidos, faz a soma de forma que o TypeScript aceite sem medo
    if (linhaAlvo && indiceMes >= 0 && indiceMes < 12) {
      linhaAlvo[indiceMes] = (linhaAlvo[indiceMes] || 0) + despesa.valor;
    }
  }

  return matriz;
}
