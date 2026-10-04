import { Despesa } from './tipos.js';
import { adicionarDespesa } from './despesas.js';
import { matrizCategoriaMes, formatarRelatorio } from './relatorio.js';

// 1. Montagem do array inicial com 8 despesas de exemplo atendendo aos critérios do professor:
// Cobertura: 4 categorias (alimentação, transporte, lazer, moradia) e 3 meses diferentes (janeiro, fevereiro e março)
let bancoDeDespesas: Despesa[] = [];

const despesasExemplo: Despesa[] = [
  { id: 1, descricao: 'Supermercado', valor: 350.00, categoria: 'alimentação', mes: 1 },
  { id: 2, descricao: 'Uber Faculdade', valor: 25.50, categoria: 'transporte', mes: 1 },
  { id: 3, descricao: 'Aluguel do Mês', valor: 1200.00, categoria: 'moradia', mes: 1 },
  { id: 4, descricao: 'Cinema com Amigos', valor: 60.00, categoria: 'lazer', mes: 2 },
  { id: 5, descricao: 'Consumo de Energia', valor: 180.00, categoria: 'moradia', mes: 2 },
  { id: 6, descricao: 'Restaurante Fim de Semana', valor: 120.00, categoria: 'alimentação', mes: 3 },
  { id: 7, descricao: 'Recarga Cartão Ônibus', valor: 50.00, categoria: 'transporte', mes: 3 },
  { id: 8, descricao: 'Assinatura Streaming', valor: 34.90, categoria: 'lazer', mes: 3 }
];

// Alimenta o nosso banco de despesas simulando o uso da nossa função de adição
for (const despesa of despesasExemplo) {
  bancoDeDespesas = adicionarDespesa(bancoDeDespesas, despesa);
}

// 2. Executa o processamento dos relatórios
const matrizGasto = matrizCategoriaMes(bancoDeDespesas);
const relatorioVisual = formatarRelatorio(bancoDeDespesas);

// 3. Imprime os resultados formatados na tela através do console.log
console.log(relatorioVisual);
