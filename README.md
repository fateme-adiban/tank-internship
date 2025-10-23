## ⚡ Local Setup

```bash

npm install

npm run dev
```

## 🧪 Tests

```bash
npm test

npx playwright test
```

## 🛠️ Project Structure

```bash
src
    /app
        /components

            Pump.tsx          # Main game page (Client Component)
            PriceChart.tsx    # Live chart (Recharts)
            Timer.tsx         # Countdown timer
            PrizeBar.tsx
            GameControls.tsx
            ResultBanner.tsx

lib

    gameReducer.ts        # Game and prize logic reducer
    priceSimulator.ts     # Simulated price generation algorithm


__tests__

    GameReducer.test.ts
    priceGenerator.test.ts
    Pump.test.tsx

e2e

    pump.spec.ts
```
