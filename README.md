# React Native Navigation – Adventure Game Demo

A multi-screen version of my [Frontend UI Adventure Game](https://github.com/talallalabadi/Frontend-UI-Adventure-Game-Demo), rebuilt with **React Native + Expo Router** for my *Growing a Competency* assignment.

**Live demo (web):** https://yalduaij.github.io/React-Native-Navigation-Adventure-Demo/

## What it demonstrates

| Concept | Where |
| --- | --- |
| File-based routing (each file in `app/` is a screen) | `app/` |
| Stack navigator, custom header styles | `app/_layout.js` |
| `router.push`, `router.replace`, `router.back`, `router.dismissTo` | `app/forest.js`, `app/cave.js` |
| Declarative `<Link>` navigation | `app/inventory.js` |
| Dynamic route + route params (`/item/Torch`) | `app/item/[name].js` |
| Modal presentation | `app/rest.js` |
| Shared state across screens (React Context) | `components/GameContext.js` |
| Reusable components + `StyleSheet` / Flexbox | `components/ui.js` |

## How to play

Explore the forest to find a **Torch**, then enter the cave to find the **Crystal Gem**. Every trip costs energy; rest at the campfire to recover it.

## Run it locally

```bash
npm install
npx expo start        # press w for web, or scan the QR code with Expo Go on your phone
```

Build the static web version: `npm run build:web` (output in `dist/`).
