import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const cartItems = [
  { id: "1", name: "Frutas", price: 50.0, items: 5, icon: require("../assets/fruits.png") },
  { id: "2", name: "Diversos", price: 35.4, items: 6, icon: require("../assets/grocery.png") },
  { id: "3", name: "Açougue", price: 56.44, items: 3, icon: require("../assets/meats.png") },
];

export default function CartScreen() {
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu carrinho</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={item.icon} style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>$ {item.price.toFixed(2)} | {item.items} itens</Text>
          </View>
          <Text style={styles.edit}>Editar</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.total}>Total a pagar {"\n"}<Text style={{ fontSize: 20 }}>$ {total.toFixed(2)}</Text></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pagar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  item: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  icon: { width: 100, height: 100, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "600" },
  details: { color: "#777" },
  edit: { color: "#6D6AF2", fontWeight: "600" },
  footer: { marginTop: "auto", alignItems: "center" },
  total: { fontSize: 14, color: "#555", marginBottom: 10 },
  button: { backgroundColor: "#6D6AF2", padding: 15, borderRadius: 30, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
