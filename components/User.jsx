import { View, Text, StyleSheet } from "react-native";

// Componente para mostrar un usuario
export default function User({ user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
}

// Estilos para el usuario
const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontWeight: "bold",
    color: "#333",
  },
  bio: {
    color: "#666",
  },
});
