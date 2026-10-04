import { describe, it, expect } from 'vitest';
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto } from './despesas.js';
import { Despesa } from './tipos.js';

// 1. Suite da Função adicionarDespesa
describe('adicionarDespesa', () => {
  it('deve adicionar uma despesa válida com sucesso retornando um novo array', () => {
    const listaInicial: Despesa[] = [];
    const novaDespesa: Despesa = { id: 1, descricao: 'Almoço', valor: 35.5, categoria: 'alimentação', mes: 5 };
    const resultado = adicionarDespesa(listaInicial, novaDespesa);
    expect(resultado).toHaveLength(1);
    expect(resultado).toEqual([novaDespesa]);
  });

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

  it('não deve alterar o array original recebido por parâmetro', () => {
    const listaInicial: Despesa[] = [{ id: 1, descricao: 'Cinema', valor: 40, categoria: 'lazer', mes: 2 }];
    const novaDespesa: Despesa = { id: 2, descricao: 'Metrô', valor: 5, categoria: 'transporte', mes: 2 };
    adicionarDespesa(listaInicial, novaDespesa);
    expect(listaInicial).toHaveLength(1);
  });
});

// 2. Suite da Função removerDespesa
describe('removerDespesa', () => {
  it('deve remover a despesa correspondente ao id informado retornando um novo array', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Almoço', valor: 35.5, categoria: 'alimentação', mes: 5 },
      { id: 2, descricao: 'Uber', valor: 20, categoria: 'transporte', mes: 5 }
    ];
    const resultado = removerDespesa(listaInicial, 1);
    expect(resultado).toHaveLength(1);
    expect(resultado[0]?.id).toBe(2);
  });

  it('deve retornar uma cópia idêntica se o id informado não existir na lista', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Almoço', valor: 35.5, categoria: 'alimentação', mes: 5 }
    ];
    const resultado = removerDespesa(listaInicial, 999);
    expect(resultado).toHaveLength(1);
    expect(resultado).toEqual(listaInicial);
  });

  it('não deve alterar a referência do array original recebido por parâmetro', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Almoço', valor: 35.5, categoria: 'alimentação', mes: 5 }
    ];
    removerDespesa(listaInicial, 1);
    expect(listaInicial).toHaveLength(1);
  });
});

// 3. Suite da Função despesasDaCategoria
describe('despesasDaCategoria', () => {
  it('deve filtrar e retornar apenas as despesas da categoria informada', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 },
      { id: 2, descricao: 'Metrô', valor: 4.40, categoria: 'transporte', mes: 3 }
    ];
    const resultado = despesasDaCategoria(listaInicial, 'alimentação');
    expect(resultado).toHaveLength(1);
    expect(resultado[0]?.descricao).toBe('Mercado');
  });

  it('deve retornar um array vazio se não houver despesas na categoria informada', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 }
    ];
    const resultado = despesasDaCategoria(listaInicial, 'moradia');
    expect(resultado).toHaveLength(0);
  });

  it('não deve alterar a referência do array original ao realizar o filtro', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150, categoria: 'alimentação', mes: 3 }
    ];
    despesasDaCategoria(listaInicial, 'alimentação');
    expect(listaInicial).toHaveLength(1);
  });
});

// 4. Suite da Função totalGasto
describe('totalGasto', () => {
  it('deve somar corretamente os valores de todas as despesas da lista', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 150.50, categoria: 'alimentação', mes: 3 },
      { id: 2, descricao: 'Metrô', valor: 4.50, categoria: 'transporte', mes: 3 }
    ];
    const resultado = totalGasto(listaInicial);
    expect(resultado).toBe(155.00);
  });

  it('deve retornar 0 se a lista de despesas estiver vazia', () => {
    const listaInicial: Despesa[] = [];
    const resultado = totalGasto(listaInicial);
    expect(resultado).toBe(0);
  });
});
