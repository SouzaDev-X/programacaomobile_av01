import React, { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "../models/Produto";

type ProdutosContextType = {
  produtos: Produto[];
  addProduto: (p: Omit<Produto, "id">) => void;
  updateProduto: (p: Produto) => void;
  deleteProduto: (id: number) => void;
};

const ProdutosContext = createContext<ProdutosContextType | undefined>(undefined);

export function ProdutosProvider({ children }: { children: ReactNode }) {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1, nome: "Teclado Mecânico", quantidade: 10, preco: 350.5 },
    { id: 2, nome: "Mouse Gamer", quantidade: 5, preco: 200.0 },
  ]);

  function addProduto(p: Omit<Produto, "id">) {
    const novo: Produto = { id: Date.now(), ...p };
    setProdutos((prev) => [novo, ...prev]);
  }

  function updateProduto(p: Produto) {
    setProdutos((prev) => prev.map((item) => (item.id === p.id ? p : item)));
  }

  function deleteProduto(id: number) {
    setProdutos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ProdutosContext.Provider value={{ produtos, addProduto, updateProduto, deleteProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  const ctx = useContext(ProdutosContext);
  if (!ctx) throw new Error("useProdutos deve ser usado dentro de ProdutosProvider");
  return ctx;
}
