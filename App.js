import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./router/AppNavigator";

// Componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
