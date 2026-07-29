# ghactions-playground

Prosty projekt Node.js do nauki pisania workflow GitHub Actions od zera.

## Co jest w projekcie

- `src/math.js` — kilka prostych funkcji (`add`, `subtract`, `divide`)
- `src/math.test.js` — testy jednostkowe (Jest)
- `eslint.config.js` — konfiguracja lintera

## Uruchamianie lokalnie

```bash
npm install
npm test
npm run lint
```

## Cel: napisz workflow GitHub Actions od zera

Ten projekt celowo **nie zawiera** pliku `.github/workflows/*.yml` — to Twoje zadanie.

Stwórz plik `.github/workflows/ci.yml`, który przy każdym `push` i `pull_request`:

1. Checkout kodu repozytorium
2. Instaluje Node.js (np. wersja 20)
3. Instaluje zależności (`npm install` lub `npm ci`)
4. Uruchamia lint (`npm run lint`)
5. Uruchamia testy (`npm test`)

### Kolejne kroki do samodzielnego eksperymentowania

- Dodaj `matrix` i przetestuj na kilku wersjach Node (np. 18, 20, 22)
- Dodaj cache dla `node_modules` (`actions/cache` lub wbudowany cache w `actions/setup-node`)
- Rozdziel lint i testy na osobne joby działające równolegle
- Dodaj krok, który celowo zepsuje test lub lint, i zobacz jak wygląda czerwony status w zakładce Actions
- Dodaj `if: failure()` z krokiem, który coś wypisze, gdy pipeline się nie powiedzie
- Spróbuj triggera `workflow_dispatch`, żeby uruchamiać pipeline ręcznie
