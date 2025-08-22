import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Modal, Button, TextInput } from "react-native";
import FabButton from "../components/FabButton";
import { Produto } from "../models/Produto";

export default function ListaProdutosScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [novoNome, setNovoNome] = useState("");

  useEffect(() => {
    // Carregar produtos (mock do api.ts)
    setProdutos([
      { id: 1, nome: "Teclado Mecânico", quantidade: 10, preco: 350.5 },
      { id: 2, nome: "Mouse Gamer", quantidade: 5, preco: 200.0 }
    ]);
  }, []);

  const adicionarProduto = () => {
    if (novoNome.trim() !== "") {
      const novoProduto: Produto = {
        id: Date.now(),
        nome: novoNome,
        quantidade: 1,
        preco: 0.0
      };
      setProdutos([...produtos, novoProduto]);
      setNovoNome("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📦 Estoque</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.nome} - {item.quantidade} un. - R${item.preco}
          </Text>
        )}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitulo}>Adicionar Produto</Text>
          <TextInput
            placeholder="Nome do produto"
            value={novoNome}
            onChangeText={setNovoNome}
            style={styles.input}
          />
          <Button title="Salvar" onPress={adicionarProduto} />
          <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <FabButton onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 16, padding: 5, borderBottomWidth: 1, borderColor: "#ddd" },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalTitulo: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", width: "80%", padding: 10, marginBottom: 15 }
});
