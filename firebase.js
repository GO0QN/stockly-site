<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCWQGLhMOcjkq2sL6gH3wMTvJx5_6uwSEA",
    authDomain: "stockly-a46b2.firebaseapp.com",
    projectId: "stockly-a46b2",
    storageBucket: "stockly-a46b2.appspot.com",
    messagingSenderId: "518502385497",
    appId: "1:518502385497:web:485983ecaca0a978faae48"
  };

  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = getFirestore(app);

  // Make available to pages
  window.__stockly = { app, auth, db };

  // Header controls (works on every page that includes this file)
  const emailSpan = document.querySelector('[data-el="userEmail"]');
  const userBtn   = document.querySelector('[data-el="userBtn"]');
  const userMenu  = document.querySelector('[data-el="userMenu"]');
  const logoutBtn = document.querySelector('[data-el="logoutBtn"]');

  if (userBtn && userMenu) {
    userBtn.addEventListener('click', () => userMenu.classList.toggle('show'));
    document.addEventListener('click', (e) => {
      if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) userMenu.classList.remove('show');
    });
  }
  if (logoutBtn) logoutBtn.addEventListener('click', async () => { await signOut(auth); location.href = "index.html"; });

  onAuthStateChanged(auth, (user) => {
    const gate = document.querySelector('[data-requires-auth]');
    if (emailSpan) emailSpan.textContent = user ? user.email : "Guest";
    if (gate && !user) location.href = "account.html?next=" + encodeURIComponent(location.pathname);
  });
</script>
