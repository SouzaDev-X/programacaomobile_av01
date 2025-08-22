import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
};

export default function ListaProdutosScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  function adicionarProduto() {
    const novoProduto: Produto = {
      id: Date.now(),
      nome: "Produto " + (produtos.length + 1),
      quantidade: 1,
      preco: 10.0,
    };
    setProdutos([...produtos, novoProduto]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📦 Lista de Produtos</Text>
      <Button title="Adicionar Produto (fake)" onPress={adicionarProduto} />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Qtd: {item.quantidade}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: { fontWeight: "bold", fontSize: 16 },
});
