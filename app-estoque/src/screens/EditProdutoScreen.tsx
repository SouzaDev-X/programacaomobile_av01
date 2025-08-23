import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useProdutos } from "../context/ProdutosContext";

type Props = NativeStackScreenProps<RootStackParamList, "EditProduto">;

export default function EditProdutoScreen({ route, navigation }: Props) {
  const { produto } = route.params;
  const { updateProduto } = useProdutos();

  const [nome, setNome] = useState(produto.nome);
  const [quantidade, setQuantidade] = useState(String(produto.quantidade));
  const [preco, setPreco] = useState(String(produto.preco));

  function salvar() {
    if (!nome.trim() || !quantidade.trim() || !preco.trim()) {
      Alert.alert("Preencha todos os campos.");
      return;
    }

    const qtd = Number(quantidade);
    const prc = Number(preco);

    if (Number.isNaN(qtd) || Number.isNaN(prc)) {
      Alert.alert("Quantidade e Preço devem ser numéricos.");
      return;
    }

    updateProduto({ ...produto, nome: nome.trim(), quantidade: qtd, preco: prc });
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Nome do produto</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Preço</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btnSalvar} onPress={salvar}>
        <Text style={styles.btnTexto}>Salvar alterações</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", gap: 10 },
  label: { fontWeight: "600", color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fafafa",
  },
  btnSalvar: {
    marginTop: 16,
    backgroundColor: "#0d6efd",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnTexto: { color: "#fff", fontWeight: "700" },
});
