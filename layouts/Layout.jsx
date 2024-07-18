import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Componente para envolver las pantallas
export default function Layout({ children }) {
  const insets = useSafeAreaInsets(); // Obtener los valores de los insets

  return (
    <SafeAreaProvider>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <StatusBar style="auto" />
        <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

// Estilos para el contenedor de las pantallas
const styles = StyleSheet.create({
  scrollContainer: {
    flexWrog: 1,
  },
});
