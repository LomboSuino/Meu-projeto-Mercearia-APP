import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Entregamos mantimentos à sua porta</Text>
      <Text style={styles.subtitle}>
        A mercearia oferece vegetais e frutas frescas. Encomende itens frescos na mercearia.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.buttonText}>INICIAR →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#fff" },
  image: { width: 220, height: 220, marginBottom: 30 },
  title: { fontSize: 22, fontWeight: "700", textAlign: "center", color: "#000" },
  subtitle: { textAlign: "center", color: "#666", marginVertical: 15, fontSize: 14 },
  button: { backgroundColor: "#6D6AF2", borderRadius: 30, paddingVertical: 14, paddingHorizontal: 32, marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
