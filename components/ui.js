import { Pressable, StyleSheet, Text, View } from "react-native";
import { useGame } from "./GameContext";

// Reusable building blocks shared by every screen.

export function Card({ title, children }) {
  return (
    <View style={styles.card}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

export function GameButton({ label, onPress, variant = "primary", disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variant === "secondary" && styles.secondary,
        variant === "success" && styles.success,
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.buttonText, variant === "secondary" && styles.secondaryText]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function StatusBar() {
  const { energy, inventory } = useGame();
  return (
    <View style={styles.status}>
      <Text style={styles.statusText}>Energy: {"●".repeat(energy)}{"○".repeat(5 - energy)}</Text>
      <Text style={styles.statusText}>Items: {inventory.length}</Text>
    </View>
  );
}

export function Screen({ children }) {
  return (
    <View style={styles.screen}>
      <StatusBar />
      {children}
    </View>
  );
}

export const colors = {
  sky: "#0EA5E9",
  primary: "#4F1DF5",
  success: "#15803D",
  text: "#111827",
  muted: "#4B5563",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.sky,
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: { fontSize: 22, fontWeight: "700", color: colors.text, textAlign: "center" },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  secondary: { backgroundColor: "white", borderWidth: 2, borderColor: colors.primary },
  success: { backgroundColor: colors.success },
  disabled: { opacity: 0.4 },
  pressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
  buttonText: { color: "white", fontWeight: "600", fontSize: 15 },
  secondaryText: { color: colors.primary },
  status: {
    width: "100%",
    maxWidth: 420,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  statusText: { fontWeight: "600", color: colors.text },
});
