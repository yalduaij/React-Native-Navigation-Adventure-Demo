import { useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { useGame } from "../components/GameContext";
import { Card, GameButton, Screen } from "../components/ui";

// Home screen: the "main menu". Each button pushes a new screen onto the stack.
export default function Home() {
  const router = useRouter();
  const { log, energy, reset } = useGame();

  return (
    <Screen>
      <Card title="Adventure Game">
        <Text style={styles.subtitle}>
          Learning React Native Navigation with Expo Router
        </Text>
        <GameButton label="Explore Forest" disabled={energy === 0} onPress={() => router.push("/forest")} />
        <GameButton label="Enter Cave" disabled={energy === 0} onPress={() => router.push("/cave")} />
        <GameButton label="Check Inventory" onPress={() => router.push("/inventory")} />
        <GameButton label="Rest at Campfire" variant="success" onPress={() => router.push("/rest")} />
        {energy === 0 ? (
          <Text style={styles.warning}>You are too tired to explore. Rest first!</Text>
        ) : null}
      </Card>

      <Card title="Journal">
        {log.map((line, i) => (
          <Text key={i} style={[styles.log, i === 0 && styles.latest]}>
            {line}
          </Text>
        ))}
        <GameButton label="Start Over" variant="secondary" onPress={reset} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: { textAlign: "center", color: "#4B5563", marginBottom: 4 },
  warning: { textAlign: "center", color: "#B91C1C", fontWeight: "600" },
  log: { color: "#4B5563" },
  latest: { color: "#111827", fontWeight: "600" },
});
