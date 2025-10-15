import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// -------------------------
// 1️⃣ Tela de Boas-vindas
// -------------------------
function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Home.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Entregamos mantimentos a sua porta</Text>

      <Text style={styles.subtitle}>
        A mercearia oferece vegetais e frutas frescas. Encomende itens frescos
        na mercearia.
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

// -------------------------
// 2️⃣ Tela Inicial (Home)
// -------------------------
function HomeScreen() {
  const compras = [
    { id: "1", nome: "Frutas", data: "27/05/2024", valor: "50,00", itens: 5 },
    { id: "2", nome: "Diversos", data: "20/05/2024", valor: "35,40", itens: 6 },
    { id: "3", nome: "Açougue", data: "20/05/2024", valor: "56,44", itens: 3 },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.location}>Taboao da Serra, SP</Text>
          </View>
          <Image source={require("./assets/user-profile.png")} style={styles.avatar} />
        </View>

        <Text style={{ color: "#888", marginTop: 15 }}>Seja bem-vindo,</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
          Vamos pedir itens fresquinhos para voce?
        </Text>

        <Text style={{ fontSize: 16, fontWeight: "H1", marginBottom: 10 }}>
          Categorias
        </Text>

        <View style={styles.grid}>
          <CategoryCard
            color="#C5D7B1"
            name="Frutas"
            image={require("./assets/fruits.png")}
          />
          <CategoryCard
            color="#92B6FA"
            name="Diversos"
            image={require("./assets/grocery.png")}
          />
          <CategoryCard
            color="#F0BDB2"
            name="Açougue"
            image={require("./assets/meats.png")}
          />
          <CategoryCard
            color="#60F8E9"
            name="Bebidas"
            image={require("./assets/drinks.png")}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
          Minhas Compras
        </Text>

        <FlatList
          data={compras}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.purchaseItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={
                    item.nome === "Frutas"
                      ? require("./assets/fruits.png")
                      : item.nome === "Diversos"
                      ? require("./assets/grocery.png")
                      : require("./assets/meats.png")
                  }
                  style={styles.smallIcon}
                />
                <View>
                  <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
                  <Text style={{ color: "#777" }}>{item.data}</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>${item.valor}</Text>
                <Text style={{ color: "#777" }}>{item.itens} itens</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// -------------------------
// 3️⃣ Tela de Pesquisa
// -------------------------
function PesquisaScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <View style={styles.header}>
          <Text style={styles.location}>Taboao da Serra, SP</Text>
          <Image source={require("./assets/user-profile.png")} style={styles.avatar} />
        </View>

        <View style={styles.searchBox}>
          <TextInput placeholder="Pesquisar..." style={{ flex: 1 }} />
        </View>

        <View style={styles.grid}>
          <CategoryCard
            color="#C5D7B1"
            name="Frutas"
            image={require("./assets/fruits.png")}
          />
          <CategoryCard
            color="#92B6FA"
            name="Diversos"
            image={require("./assets/grocery.png")}
          />
          <CategoryCard
            color="#F0BDB2"
            name="Açougue"
            image={require("./assets/meats.png")}
          />
          <CategoryCard
            color="#60F8E9"
            name="Bebidas"
            image={require("./assets/drinks.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// -------------------------
// 4️⃣ Tela do Carrinho
// -------------------------
function CarrinhoScreen() {
  const carrinho = [
    { id: "1", nome: "Frutas", valor: "50,00", itens: 5 },
    { id: "2", nome: "Diversos", valor: "35,40", itens: 6 },
    { id: "3", nome: "Açougue", valor: "56,44", itens: 3 },
  ];

  const total = "141,84";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>
        Meu carrinho
      </Text>

      {carrinho.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                item.nome === "Frutas"
                  ? require("./assets/fruits.png")
                  : item.nome === "Diversos"
                  ? require("./assets/grocery.png")
                  : require("./assets/meats.png")
              }
              style={styles.smallIcon}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
              <Text style={{ color: "#777" }}>
                ${item.valor} · {item.itens} itens
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#6B6BFF" }}>Editar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.cartFooter}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Total a pagar</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>${total}</Text>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pagar agora →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// -------------------------
// Componentes auxiliares
// -------------------------
function CategoryCard({ color, name, image }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Image source={image} style={{ width: 50, height: 50, marginBottom: 5 }} />
      <Text style={styles.cardText}>{name}</Text>
    </View>
  );
}

// -------------------------
// Navegação principal
// -------------------------
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = require("./assets/icon-home.png");
          } else if (route.name === "Pesquisa") {
            iconSource = require("./assets/icon-search.png");
          } else if (route.name === "Historico") {
            iconSource = require("./assets/icon-list.png");
          } else if (route.name === "Carrinho") {
            iconSource = require("./assets/icon-Shopping-bag.png");
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 28,
                height: 28,
                opacity: focused ? 1 : 0.5, // mais claro quando não selecionado
              }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pesquisa" component={PesquisaScreen} />
      <Tab.Screen name="Historico" component={HomeScreen} />
      <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
    </Tab.Navigator>
  );
}


// -------------------------
// App principal
// -------------------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// -------------------------
// Estilos
// -------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: { width: 220, height: 220, marginBottom: 30 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  subtitle: { fontSize: 15, textAlign: "center", color: "#555", marginBottom: 40 },
  button: {
    backgroundColor: "#6B6BFF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: { fontSize: 14, marginLeft: 5 },
  avatar: { width: 35, height: 35, borderRadius: 20 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    width: "48%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  cardText: { fontWeight: "bold" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 20,
  },
  purchaseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  smallIcon: { width: 90, height: 90, marginRight: 10 },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cartFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  payButton: {
    backgroundColor: "#6B6BFF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  payButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
