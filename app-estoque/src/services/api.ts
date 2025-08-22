import axios from "axios";
import { Produto } from "../models/Produto";

// Substitua pelo seu IP local
const API_BASE_URL = "http://192.168.x.x:3000";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Funções simuladas (para teste do módulo 05)
export const getProdutos = async (): Promise<Produto[]> => {
  // Mock simples enquanto API real não está pronta
  return [
    { id: 1, nome: "Teclado Mecânico", quantidade: 10, preco: 350.5 },
    { id: 2, nome: "Mouse Gamer", quantidade: 5, preco: 200.0 },
  ];
};
