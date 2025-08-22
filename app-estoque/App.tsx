import React from "react";
import { SafeAreaView, Text, Button, Alert, StyleSheet } from "react-native";
import CardInfo from "./src/components/CardInfo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Gerenciador de Estoque</Text>
      <Text style={styles.subtitulo}>Módulo 03 — TypeScript no Expo</Text>

      <CardInfo
        titulo="O que é TypeScript?"
        descricao="É um superconjunto do JavaScript que adiciona tipagem estática."
      />

      <Button title="Exemplo TS" onPress={() => Alert.alert("TypeScript funcionando!")} />

      <Text style={styles.rodape}>Disciplina: Programação Mobile • Prazo: 23/08/2025</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitulo: { fontSize: 16, marginBottom: 20 },
  rodape: { marginTop: 40, fontSize: 12, color: "#777" },
});
