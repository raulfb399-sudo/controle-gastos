import { Despesa } from './tipos.js';

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  // Validação de negócio: o valor não pode ser menor ou igual a zero
  if (nova.valor <= 0) {
    throw new Error('O valor da despesa deve ser maior que zero.');
  }

  // Validação de negócio: o mês precisa ser um mês válido no calendário (1 a 12)
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error('O mês da despesa deve estar entre 1 e 12.');
  }

  // Atendendo ao requisito técnico obrigatório: Não alterar o array recebido.
  // Criamos uma nova lista combinando os elementos anteriores com a nova despesa usando o operador spread.
  return [...despesas, nova];
}
export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
  // Atendendo ao requisito técnico obrigatório de imutabilidade:
  // O método '.filter()' percorre o array e gera automaticamente uma LISTA NOVA.
  // Ele avalia cada item: se o id da despesa for DIFERENTE do id informado, o item permanece.
  // Se o id for IGUAL, o item fica de fora da nova lista.
  // Caso o id não exista na lista, nenhum item é removido, retornando uma cópia idêntica.
  return despesas.filter(despesa => despesa.id !== id);
}


