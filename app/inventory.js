import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useGame } from "../components/GameContext";
import { Card, GameButton, Screen } from "../components/ui";

export default function Inventory() {
  const router = useRouter();
  const { inventory } = useGame();

  return (
    <Screen>
      <Card title="🎒 Inventory">
        {inventory.length === 0 ? (
          <Text style={styles.empty}>Your bag is empty. Go explore!</Text>
        ) : (
          inventory.map((item) => (
            // <Link> navigates declaratively and passes the item name as a route param.
            <Link key={item} href={{ pathname: "/item/[name]", params: { name: item } }} asChild>
              <Pressable style={styles.row}>
                <Text style={styles.item}>{item}</Text>
                <Text style={styles.chevron}>›</Text>
              </Pressable>
            </Link>
          ))
        )}
        <View style={{ height: 4 }} />
        <GameButton label="Back" variant="secondary" onPress={() => router.back()} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { textAlign: "center", color: "#4B5563" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#EEF2FF",
  },
  item: { fontSize: 16, fontWeight: "600", color: "#111827" },
  chevron: { fontSize: 22, color: "#4F1DF5" },
});
