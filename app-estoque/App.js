import React from 'react';
import { View, Text, Button, StyleSheet, Alert, StatusBar } from 'react-native';

export default function App() {
  const onPressHello = () => {
    Alert.alert('Olá!', 'Bem-vindo ao Gerenciador de Estoque (CRUD) 📦');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Gerenciador de Estoque</Text>
      <Text style={styles.subtitle}>Módulo 01 — Olá, mundo com Expo</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Este app será usado para listar, adicionar, editar e excluir produtos.
        </Text>
        <Button title="Dizer Olá" onPress={onPressHello} />
      </View>

      <Text style={styles.footer}>
        Disciplina: Programação Mobile • Prazo: 23/08/2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#777',
    fontSize: 12,
    paddingBottom: 24,
  },
});
