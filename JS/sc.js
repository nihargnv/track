<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAB1YVvaN9suOL71Wm72b_RpWzeGePT_NQ",
    authDomain: "track-e015a.firebaseapp.com",
    projectId: "track-e015a",
    storageBucket: "track-e015a.firebasestorage.app",
    messagingSenderId: "67318371125",
    appId: "1:67318371125:web:24b980d689f4defba1327c",
    measurementId: "G-11LLTK8FG7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>