import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Card, GameButton, Screen } from "../../components/ui";

const DETAILS = {
  Torch: { icon: "🔥", text: "A wooden torch. It can light up dark places like the cave." },
  Berries: { icon: "🫐", text: "Wild berries. Sweet, and a little bit sour." },
  "Old Map": { icon: "🗺️", text: "A faded map with an X marked near the cave." },
  "Crystal Gem": { icon: "💎", text: "A glowing crystal. The treasure of this adventure!" },
};

// Dynamic route: /item/Torch, /item/Berries ... one file handles them all.
export default function ItemDetails() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  const info = DETAILS[name] ?? { icon: "❓", text: "An unknown item." };

  return (
    <Screen>
      {/* The header title is set from the route param at runtime. */}
      <Stack.Screen options={{ title: name }} />
      <Card title={`${info.icon} ${name}`}>
        <Text style={styles.text}>{info.text}</Text>
        <Text style={styles.param}>Route param received: name = "{name}"</Text>
        <GameButton label="Back" variant="secondary" onPress={() => router.back()} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 16, textAlign: "center", color: "#111827" },
  param: { fontSize: 12, textAlign: "center", color: "#6B7280", fontFamily: "monospace" },
});
