import { Despesa } from './tipos.js';

// 1. Função: Adicionar Despesa
export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error('O valor da despesa deve ser maior que zero.');
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error('O mês da despesa deve estar entre 1 e 12.');
  }
  return [...despesas, nova];
}

// 2. Função: Remover Despesa
export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
  return despesas.filter(despesa => despesa.id !== id);
}

// 3. Função: Despesas da Categoria (Esqueleto para o Teste)
export function despesasDaCategoria(despesas: Despesa[], categoria: 'alimentação' | 'transporte' | 'lazer' | 'moradia'): Despesa[] {
  // Mantemos o erro de propósito para cumprir a regra do trabalho do professor
  throw new Error("não implementado");
}



