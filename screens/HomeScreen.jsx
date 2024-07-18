import { StyleSheet, View, Button, Text } from "react-native";
import Layout from "../layouts/Layout";
import UserList from "../components/UserList";
import DATA from "./../data/users.json";

const users = DATA.users;

// Componente para la pantalla de inicio
export default function HomeScreen({ navigation }) {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio</Text>
        <Button
          title="Acerca de"
          onPress={() => navigation.navigate("About")}
        />
        <UserList users={users} />
      </View>
    </Layout>
  );
}

// Estilos de la pantalla de inicio
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
