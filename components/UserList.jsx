import { View, Text, FlatList, StyleSheet } from "react-native";
import User from "./User";

// Componente para la lista de usuarios
export default function UserList({ users }) {
  const count = users.length;
  let heading = "";
  if (count > 0) {
    const noun = count > 1 ? "Usuarios" : "Usuario";
    heading = count + " " + noun;
  }

  return (
    <View style={styles.container}>
      <Text>{heading}</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => <User user={item} />}
      />
    </View>
  );
}

// Estilos para la lista de usuarios
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
});
