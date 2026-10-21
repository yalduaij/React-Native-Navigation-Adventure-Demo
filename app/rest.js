import { useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { useGame } from "../components/GameContext";
import { Card, GameButton, Screen } from "../components/ui";

// Presented as a modal (see _layout.js) instead of a normal pushed screen.
export default function Rest() {
  const router = useRouter();
  const { energy, rest } = useGame();

  return (
    <Screen>
      <Card title="🔥 Campfire">
        <Text style={styles.text}>
          {energy === 5 ? "You feel fully rested." : "Sit by the fire and recover your energy."}
        </Text>
        <GameButton
          label="Rest"
          variant="success"
          disabled={energy === 5}
          onPress={() => {
            rest();
            router.back();
          }}
        />
        <GameButton label="Close" variant="secondary" onPress={() => router.back()} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 16, textAlign: "center", color: "#111827" },
});
