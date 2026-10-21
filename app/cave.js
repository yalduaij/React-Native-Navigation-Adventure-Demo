import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useGame } from "../components/GameContext";
import { Card, GameButton, Screen } from "../components/ui";

export default function Cave() {
  const router = useRouter();
  const { inventory, addItem, addLog, spendEnergy } = useGame();
  const hasTorch = inventory.includes("Torch");
  const hasGem = inventory.includes("Crystal Gem");

  useEffect(() => {
    spendEnergy(1);
    addLog(hasTorch ? "You light your torch and step into the cave." : "The cave is pitch black.");
  }, []);

  const takeGem = () => {
    addItem("Crystal Gem");
    addLog("You found a glowing Crystal Gem deep in the cave!");
  };

  return (
    <Screen>
      <Card title="🕳️ The Cave">
        {hasTorch ? (
          <>
            <Text style={styles.text}>
              Your torch lights up the walls. A crystal glows at the back of the cave.
            </Text>
            <GameButton
              label={hasGem ? "Gem Collected" : "Take the Crystal Gem"}
              variant="success"
              disabled={hasGem}
              onPress={takeGem}
            />
          </>
        ) : (
          <>
            <Text style={styles.text}>
              It's too dark to see anything. Maybe there's a torch in the forest?
            </Text>
            <GameButton label="Search the Forest" onPress={() => router.replace("/forest")} />
          </>
        )}
        <GameButton label="Check Inventory" onPress={() => router.push("/inventory")} />
        <GameButton label="Back to Menu" variant="secondary" onPress={() => router.dismissTo("/")} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 16, color: "#111827", textAlign: "center" },
});
