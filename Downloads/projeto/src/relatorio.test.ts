import { describe, it, expect } from 'vitest';
import { descricaoCategoria } from './relatorio.js';

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
});
