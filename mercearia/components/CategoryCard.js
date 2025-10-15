import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CategoryCard({ item }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    margin: 5,
    borderRadius: 15,
  },
  icon: { width: 40, height: 40, marginBottom: 10 },
  text: { fontWeight: "600", fontSize: 16 },
});
