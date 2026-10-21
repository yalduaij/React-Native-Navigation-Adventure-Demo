import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GameProvider } from "../components/GameContext";
import { colors } from "../components/ui";

// Root layout: wraps every screen in the shared game state and a Stack
// navigator. Each file in /app becomes a screen (file-based routing).
export default function RootLayout() {
  return (
    <GameProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "700" },
          contentStyle: { backgroundColor: colors.sky },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Adventure Navigator" }} />
        <Stack.Screen name="forest" options={{ title: "The Forest" }} />
        <Stack.Screen name="cave" options={{ title: "The Cave" }} />
        <Stack.Screen name="inventory" options={{ title: "Inventory" }} />
        <Stack.Screen name="item/[name]" options={{ title: "Item Details" }} />
        <Stack.Screen
          name="rest"
          options={{ title: "Campfire", presentation: "modal" }}
        />
      </Stack>
    </GameProvider>
  );
}
