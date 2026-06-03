# News App (React Native + Expo)

This is a News App built using React Native and Expo. The app fetches articles from NewsAPI.org and displays them in a simple, scrollable list. You can browse trending news and (optionally) filter or expand to category-based views.

![Screenshot](assets/Screenshots(1).jpeg)


Features
- Display latest/trending news articles
- Show article title, image, description and published date
- Tap a card to open the original article in the browser
- Placeholder image for missing thumbnails

Categories
- Entertainment
- Business
- Health
- Politics
- Technology
- Sports
- Tutorial

Screens
- Home: list of articles (default/trending)

Prerequisites
- Node.js and npm (or yarn)
- Expo CLI (optional; recommended for development)
- A NewsAPI.org API key (free tier available)

Getting an API key
1. Visit https://newsapi.org/ and sign up for an account.
2. Create a new API key (the dashboard will show your key).
3. Copy the key for use in the project.

Setup and run (local)
1. Install dependencies

```powershell
npm install
# or
yarn
```

2. Configure the API key

- Copy the example config file to create your local `config.js`:

```powershell
copy config.example.js config.js
```

- Open `config.js` and replace the placeholder with your NewsAPI key:

```js
export const NEWS_API_KEY = 'YOUR_REAL_NEWSAPI_KEY'
```

Note: `config.js` is included in `.gitignore` so your real key will not be committed.

3. Start Expo

```powershell
npx expo start
```

Then open the app on an emulator or use the Expo Go app on your device.

Project layout
- `App.js` — app entry point
- `screens/HomeScreen/index.js` — main screen that fetches and renders articles
- `components/AppBar.js` — header component
- `config.example.js` — example config; copy to `config.js` and fill in your API key

Notes & troubleshooting
- If you get a 401/403 from NewsAPI, verify your key in `config.js` and make sure it's active.
- NewsAPI may enforce rate limits — avoid excessive polling on the free tier.
- If images fail to load, the app uses a placeholder image.

Security
- Do not commit `config.js` to source control. Use `config.example.js` as the template.

Contributing
- Fork the repo, make changes, and open a pull request.

License
- See the `LICENSE` file in the project root.

Enjoy the app — if you want, I can add category filtering, a pull-to-refresh, or pagination next.
# React Native Expo News App

Simple React Native app (Expo) that fetches news articles from NewsAPI.org and displays them in cards.

## Quick start

1. Install dependencies

```powershell
npm install
# or
yarn
```

2. Configure API key

- Copy `config.example.js` to `config.js`:

```powershell
copy config.example.js config.js
```

- Open `config.js` and set `NEWS_API_KEY` to your NewsAPI.org key.

Important: `config.js` is listed in `.gitignore` so you should never commit your real API key.

3. Start the app (Expo)

```powershell
npx expo start
```

Then open the project in an emulator or on your device via the Expo Go app.

## Files added/edited

- `config.example.js` — example config you should copy to `config.js` and fill in your API key
- `.gitignore` — ignores `node_modules`, `config.js`, build artifacts, etc.
- `LICENSE` — updated owner name

## Notes

- If you accidentally committed a real API key, remove it from the repo and rotate the key immediately.
- To contribute: fork, make changes, and open a PR against `main`.

## License

See the `LICENSE` file.
