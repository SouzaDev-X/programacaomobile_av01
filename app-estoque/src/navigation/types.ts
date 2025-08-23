// src/navigation/types.ts
import { Produto } from "../models/Produto";

export type RootStackParamList = {
  ListaProdutos: undefined;
  AddProduto: undefined;
  EditProduto: { produto: Produto };
};
