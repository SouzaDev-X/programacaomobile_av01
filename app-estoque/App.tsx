import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ListaProdutosScreen from "./src/screens/ListaProdutosScreen";
import AddProdutoScreen from "./src/screens/AddProdutoScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutosScreen />
      <AddProdutoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
