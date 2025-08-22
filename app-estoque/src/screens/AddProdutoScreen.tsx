import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddProdutoScreen() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  function salvarProduto() {
    if (!nome || !quantidade || !preco) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Produto salvo (local)",
      `Nome: ${nome}\nQtd: ${quantidade}\nPreço: R$${preco}`
    );
    setNome("");
    setQuantidade("");
    setPreco("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>➕ Adicionar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <Button title="Salvar Produto" onPress={salvarProduto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
