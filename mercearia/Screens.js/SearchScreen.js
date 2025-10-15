import React from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";

const categories = [
  { id: "1", name: "Frutas", color: "#C8E6C9", icon: require("../assets/fruits.png") },
  { id: "2", name: "Diversos", color: "#BBDEFB", icon: require("../assets/grocery.png") },
  { id: "3", name: "Açougue", color: "#FFCCBC", icon: require("../assets/meats.png") },
  { id: "4", name: "Bebidas", color: "#60F8E9", icon: require("../assets/drinks.png") },
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Pesquisar..." style={styles.input} />
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  input: { backgroundColor: "#f3f3f3", padding: 10, borderRadius: 10, marginBottom: 20 },
});
