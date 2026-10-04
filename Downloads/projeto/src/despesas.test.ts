import { describe, it, expect } from 'vitest';
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto } from './despesas.js';
import { Despesa } from './tipos.js';

// Lembre de ajustar a linha 2 do import para incluir: despesasDaCategoria

describe('totalGasto', () => {
  // Caso Normal
  it('deve somar corretamente os valores de todas as despesas da lista', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150.50, categoria: 'alimentação', mes: 3 },
      { id: 2, descricao: 'Metrô', valor: 4.50, categoria: 'transporte', mes: 3 }
    ];
    
    const resultado = totalGasto(listaInicial);
    
    expect(resultado).toBe(155.00); // 150.50 + 4.50 deve dar 155
  });

  // Caso de Borda
  it('deve retornar 0 se a lista de despesas estiver vazia', () => {
    const listaInicial: Despesa[] = [];
    
    const resultado = totalGasto(listaInicial);
    
    expect(resultado).toBe(0); // Lista vazia precisa retornar zero
  });
});

