import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CardInfoProps = {
  titulo: string;
  descricao: string;
};

export default function CardInfo({ titulo, descricao }: CardInfoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#555",
  },
});
