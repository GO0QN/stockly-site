# Stockly Pro (static, GitHub Pages–ready)

**What’s inside**
- Firebase email/password auth (plug in your config to enable cloud saves)
- Live candlestick simulator (OHLC every second)
- Paper trading sandbox (P/L, avg price, UPL/RPL, localStorage)
- Options payoff lab (calls/puts/spreads + iron condor)
- 30-question quiz with explanations (saved per user)

**How to deploy**
- Upload the folder contents to your repo root and enable GitHub Pages (main / root).

**To enable accounts & email collection**
1. Create a Firebase project at https://console.firebase.google.com
2. Add a **Web App** to get your config object (apiKey, authDomain, projectId, appId).
3. In **Authentication**, enable **Email/Password** sign-in.
4. In **Firestore Database**, create a database in test mode.
5. Replace the `FIREBASE_CONFIG` placeholder in `index.html` with your values.
6. (Optional) Set Firestore rules to restrict reads/writes to `request.auth != null`.
7. Re-deploy. Sign-ups will appear under **Authentication → Users**; quiz & sandbox data under Firestore.

This site is for **education only**. It does not provide financial advice.
