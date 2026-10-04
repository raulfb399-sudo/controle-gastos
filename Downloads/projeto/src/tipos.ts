export interface Despesa {
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: 'alimentação' | 'transporte' | 'lazer' | 'moradia';
  mes: number;
  observacao?: string;
}

export const CATEGORIAS = ['alimentação', 'transporte', 'lazer', 'moradia'] as const;
