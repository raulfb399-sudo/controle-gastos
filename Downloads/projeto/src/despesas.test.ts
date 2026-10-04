import { describe, it, expect } from 'vitest';
import { adicionarDespesa, removerDespesa, despesasDaCategoria } from './despesas.js';
import { Despesa } from './tipos.js';

// Lembre de ajustar a linha 2 do import para incluir: despesasDaCategoria

describe('despesasDaCategoria', () => {
  // Caso Normal
  it('deve filtrar e retornar apenas as despesas da categoria informada', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 },
      { id: 2, descricao: 'Metrô', valor: 4.40, categoria: 'transporte', mes: 3 }
    ];
    
    const resultado = despesasDaCategoria(listaInicial, 'alimentação');
    
    expect(resultado).toHaveLength(1);
    expect(resultado[0]?.descricao).toBe('Mercado');
  });

  // Caso de Borda
  it('deve retornar um array vazio se não houver despesas na categoria informada', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 }
    ];
    
    const resultado = despesasDaCategoria(listaInicial, 'moradia'); // Nenhuma moradia cadastrada
    
    expect(resultado).toHaveLength(0); // Lista vazia
  });

  // Teste de Imutabilidade
  it('não deve alterar a referência do array original ao realizar o filtro', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 }
    ];
    
    despesasDaCategoria(listaInicial, 'alimentação');
    
    expect(listaInicial).toHaveLength(1); // Garante que a lista inicial ficou intocada
  });
});

