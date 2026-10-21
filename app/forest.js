import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useGame } from "../components/GameContext";
import { Card, GameButton, Screen } from "../components/ui";

const FINDS = ["Torch", "Berries", "Old Map"];

export default function Forest() {
  const router = useRouter();
  const { addItem, addLog, spendEnergy, inventory } = useGame();
  const [found, setFound] = useState(null);

  // Runs once when the screen opens: entering the forest costs energy.
  useEffect(() => {
    spendEnergy(1);
    addLog("You walk into the forest. The trees are tall and the path is quiet.");
  }, []);

  const search = () => {
    const remaining = FINDS.filter((f) => !inventory.includes(f));
    if (remaining.length === 0) {
      setFound("nothing new");
      return;
    }
    const item = remaining[0];
    addItem(item);
    addLog(`You found a ${item} in the forest.`);
    setFound(item);
  };

  return (
    <Screen>
      <Card title="🌲 The Forest">
        <Text style={styles.text}>
          The trees are tall and the path is quiet. Something glints under a bush.
        </Text>
        {found ? (
          <Text style={styles.found}>
            {found === "nothing new" ? "You've already searched everywhere." : `You found: ${found}!`}
          </Text>
        ) : null}
        <GameButton label="Search the Bushes" onPress={search} />
        {found && found !== "nothing new" ? (
          <GameButton
            label={`Inspect ${found}`}
            variant="success"
            onPress={() => router.push({ pathname: "/item/[name]", params: { name: found } })}
          />
        ) : null}
        <GameButton label="Go to the Cave" onPress={() => router.replace("/cave")} />
        <GameButton label="Back to Menu" variant="secondary" onPress={() => router.back()} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 16, color: "#111827", textAlign: "center" },
  found: { fontSize: 16, color: "#15803D", fontWeight: "700", textAlign: "center" },
});
