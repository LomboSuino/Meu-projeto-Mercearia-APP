import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import CategoryCard from "../components/CategoryCard";

const categories = [
  { id: "1", name: "Frutas", color: "#C8E6C9", icon: require("../assets/fruits.png") },
  { id: "2", name: "Diversos", color: "#BBDEFB", icon: require("../assets/grocery.png") },
  { id: "3", name: "Açougue", color: "#FFCCBC", icon: require("../assets/meats.png") },
];

const purchases = [
  { id: "1", name: "Frutas", date: "20/05/2024", price: 50.0, items: 5, icon: require("../assets/fruits.png") },
  { id: "2", name: "Diversos", date: "20/05/2024", price: 35.4, items: 6, icon: require("../assets/grocery.png") },
  { id: "3", name: "Açougue", date: "20/05/2024", price: 56.44, items: 3, icon: require("../assets/meats.png") },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>📍 Taboao da Serra, SP</Text>
      <Text style={styles.welcome}>Seja bem-vindo,</Text>
      <Text style={styles.title}>Vamos pedir itens fresquinhos para voce?</Text>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => <CategoryCard item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Minhas Compras</Text>
      {purchases.map((p) => (
        <View key={p.id} style={styles.purchaseItem}>
          <Image source={p.icon} style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.purchaseName}>{p.name}</Text>
            <Text style={styles.purchaseDate}>{p.date}</Text>
          </View>
          <Text style={styles.price}>$ {p.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  location: { color: "#444", marginBottom: 5 },
  welcome: { color: "#92BFA", fontSize: 10 },
  title: { fontSize: 10, fontWeight: "700", marginBottom: 20 },
  sectionTitle: { fontWeight: "700", fontSize: 16, marginTop: 20 },
  purchaseItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  icon: { width: 100, height: 100, marginRight: 10 },
  purchaseName: { fontSize: 15, fontWeight: "600" },
  purchaseDate: { fontSize: 13, color: "F0BDB2" },
  price: { fontWeight: "700", color: "#050609" },
});
