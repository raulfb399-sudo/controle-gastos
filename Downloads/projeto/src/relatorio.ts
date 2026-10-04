import { CATEGORIAS } from './tipos.js';

type Categoria = typeof CATEGORIAS[number];

export function descricaoCategoria(categoria: Categoria): string {
  // Atendendo ao requisito técnico obrigatório: Uso de switch para mapeamento.
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
      // Tratamento de segurança caso chegue um valor inesperado em tempo de execução
      return categoria;
  }
}
