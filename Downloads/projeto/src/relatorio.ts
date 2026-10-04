import { CATEGORIAS } from './tipos.js';

// Tipo utilitário extraído dinamicamente das nossas categorias para travar os parâmetros da função
type Categoria = typeof CATEGORIAS[number];

export function descricaoCategoria(categoria: Categoria): string {
  // Mantemos o erro de propósito para cumprir a regra do trabalho do professor
  throw new Error("não implementado");
}
