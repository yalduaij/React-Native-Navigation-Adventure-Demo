import { createContext, useContext, useState } from "react";

// Shared game state. It lives above the navigator, so every screen
// reads the same inventory and energy, even after moving between screens.
const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [inventory, setInventory] = useState([]);
  const [energy, setEnergy] = useState(5);
  const [log, setLog] = useState(["You wake up at the edge of a quiet village."]);

  const addLog = (line) => setLog((prev) => [line, ...prev].slice(0, 6));

  const addItem = (item) => {
    setInventory((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };

  const spendEnergy = (amount = 1) => {
    setEnergy((e) => Math.max(0, e - amount));
  };

  const rest = () => {
    setEnergy(5);
    addLog("You rest for a while and regain all your energy.");
  };

  const reset = () => {
    setInventory([]);
    setEnergy(5);
    setLog(["A new adventure begins."]);
  };

  return (
    <GameContext.Provider
      value={{ inventory, energy, log, addLog, addItem, spendEnergy, rest, reset }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
