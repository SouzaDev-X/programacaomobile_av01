import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaProdutosScreen from "./src/screens/ListaProdutosScreen";
import AddProdutoScreen from "./src/screens/AddProdutoScreen";
import EditProdutoScreen from "./src/screens/EditProdutoScreen";
import { ProdutosProvider } from "./src/context/ProdutosContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProdutosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutosScreen}
            options={{ title: "Gerenciador de Estoque" }}
          />
          <Stack.Screen
            name="AddProduto"
            component={AddProdutoScreen}
            options={{ title: "Adicionar Produto" }}
          />
          <Stack.Screen
            name="EditProduto"
            component={EditProdutoScreen}
            options={{ title: "Editar Produto" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProdutosProvider>
  );
}
