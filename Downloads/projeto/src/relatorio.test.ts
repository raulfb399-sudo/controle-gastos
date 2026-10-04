import { describe, it, expect } from 'vitest';
import { descricaoCategoria, matrizCategoriaMes } from './relatorio.js';
import { Despesa } from './tipos.js';

describe('descricaoCategoria', () => {
  // Caso Normal
  it('deve retornar o nome exibível correto com a primeira letra maiúscula para alimentação', () => {
    const resultado = descricaoCategoria('alimentação');
    expect(resultado).toBe('Alimentação');
  });

  it('deve retornar o nome exibível correto com a primeira letra maiúscula para transporte', () => {
    const resultado = descricaoCategoria('transporte');
    expect(resultado).toBe('Transporte');
  });

  // Caso de Borda
  it('deve formatar moradia corretamente mesmo sendo a última opção do switch', () => {
    const resultado = descricaoCategoria('moradia');
    expect(resultado).toBe('Moradia');
  });
  describe('matrizCategoriaMes', () => {
  // Caso Normal
  it('deve agrupar os gastos por categoria e mês corretamente em uma matriz 4x12', () => {
    const listaInicial: Despesa[] = [
      { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentação', mes: 1 }, // Linha 0, Coluna 0
      { id: 2, descricao: 'Feira', valor: 50, categoria: 'alimentação', mes: 1 },    // Linha 0, Coluna 0 (soma)
      { id: 3, descricao: 'Combustível', valor: 80, categoria: 'transporte', mes: 12 } // Linha 1, Coluna 11
    ];

    const matriz = matrizCategoriaMes(listaInicial);

    // Valida o tamanho da estrutura
    expect(matriz).toHaveLength(4); // 4 categorias
    expect(matriz[0]).toHaveLength(12); // 12 meses

    // Valida os valores acumulados nas posições corretas
    expect(matriz[0]?.[0]).toBe(150); // Alimentação no mês 1 (índice 0) -> 100 + 50 = 150
    expect(matriz[1]?.[11]).toBe(80); // Transporte no mês 12 (índice 11) -> 80
    expect(matriz[3]?.[5]).toBe(0);   // Moradia no mês 6 -> Sem gastos, deve ser 0
  });

  // Caso de Borda
  it('deve retornar uma matriz preenchida inteiramente com zeros se a lista estiver vazia', () => {
    const matrizVazia = matrizCategoriaMes([]);
    
    expect(matrizVazia).toHaveLength(4);
    expect(matrizVazia[0]?.[0]).toBe(0);
    expect(matrizVazia[2]?.[5]).toBe(0);
  });
});

});
