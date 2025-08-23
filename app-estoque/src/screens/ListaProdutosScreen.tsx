import React from "react";
import {SafeAreaView,View,Text,FlatList,StyleSheet,TouchableOpacity,Alert,} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/types";
import { useProdutos } from "../context/ProdutosContext";
import FabButton from "../components/FabButton";
import { Produto } from "../models/Produto";

type Props = NativeStackScreenProps<RootStackParamList, "ListaProdutos">;

export default function ListaProdutosScreen({ navigation }: Props) {
  const { produtos, deleteProduto } = useProdutos();

  function confirmarExclusao(item: Produto) {
    Alert.alert(
      "Excluir produto",
      `Tem certeza que deseja excluir "${item.nome}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: () => deleteProduto(item.id) },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum produto cadastrado.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.linha}>Qtd: {item.quantidade}</Text>
              <Text style={styles.linha}>Preço: R$ {item.preco.toFixed(2)}</Text>
            </View>

            <View style={styles.acoes}>
              <TouchableOpacity
                style={[styles.btn, styles.btnEditar]}
                onPress={() => navigation.navigate("EditProduto", { produto: item })}
              >
                <Ionicons name="create-outline" size={18} color="#fff" />
                <Text style={styles.btnTexto}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btn, styles.btnExcluir]}
                onPress={() => confirmarExclusao(item)}
              >
                <Ionicons name="trash-outline" size={18} color="#fff" />
                <Text style={styles.btnTexto}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ padding: 20 }}
      />

      <FabButton onPress={() => navigation.navigate("AddProduto")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  vazio: { textAlign: "center", marginTop: 40, color: "#777" },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    gap: 12,
  },
  nome: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  linha: { fontSize: 14, color: "#444" },
  acoes: { justifyContent: "space-between" },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  btnEditar: { backgroundColor: "#0d6efd" },
  btnExcluir: { backgroundColor: "#dc3545" },
  btnTexto: { color: "#fff", fontWeight: "600" },
});
