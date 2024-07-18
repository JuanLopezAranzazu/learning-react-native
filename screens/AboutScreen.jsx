import { View, Text, StyleSheet } from "react-native";
import Layout from "../layouts/Layout";

// Componente para la pantalla de acerca de
export default function AboutScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Acerca de</Text>
        <Text style={styles.text}>
          Esta es una aplicación de ejemplo con React Native.
        </Text>
      </View>
    </Layout>
  );
}

// Estilos para la pantalla de acerca de
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
