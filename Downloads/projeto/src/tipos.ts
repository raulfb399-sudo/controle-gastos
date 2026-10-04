import { describe, it, expect } from 'vitest';
import { adicionarDespesa } from './despesas.js';
import { Despesa } from './tipos';

describe('adicionarDespesa', () => {
  // Caso Normal
  it('deve adicionar uma despesa válida com sucesso retornando um novo array', () => {
    const listaInicial: Despesa[] = [];
    const novaDespesa: Despesa = { id: 1, descricao: 'Almoço', valor: 35.5, categoria: 'alimentação', mes: 5 };
    
    const resultado = adicionarDespesa(listaInicial, novaDespesa);
    
    expect(resultado).toHaveLength(1);
    expect(resultado[0]).toEqual(novaDespesa);
  });

  // Casos de Borda
  it('deve lançar erro se o valor da despesa for menor ou igual a zero', () => {
    const listaInicial: Despesa[] = [];
    const despesaInvalida: Despesa = { id: 2, descricao: 'Uber', valor: 0, categoria: 'transporte', mes: 5 };
    
    expect(() => adicionarDespesa(listaInicial, despesaInvalida)).toThrow();
  });

  it('deve lançar erro se o mês não estiver entre 1 e 12', () => {
    const listaInicial: Despesa[] = [];
    const despesaInvalida: Despesa = { id: 3, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 13 };
    
    expect(() => adicionarDespesa(listaInicial, despesaInvalida)).toThrow();
  });

  // Requisito Técnico Obrigatório: Teste de Imutabilidade
  it('não deve alterar o array original recebido por parâmetro', () => {
    const listaInicial: Despesa[] = [{ id: 1, descricao: 'Cinema', valor: 40, categoria: 'lazer', mes: 2 }];
    const novaDespesa: Despesa = { id: 2, descricao: 'Metrô', valor: 5, categoria: 'transporte', mes: 2 };
    
    adicionarDespesa(listaInicial, novaDespesa);
    
    expect(listaInicial).toHaveLength(1); // Garante que a lista de fora permaneceu intacta
  });
});
export interface Despesa {
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: 'alimentação' | 'transporte' | 'lazer' | 'moradia';
  mes: number;
  observacao?: string;
}

export const CATEGORIAS = ['alimentação', 'transporte', 'lazer', 'moradia'] as const;

