// Utils/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDovSooXvE770rs8Fna9EnqVDRFOY7SWE8",
  authDomain: "netflixgpt-f5ee9.firebaseapp.com",
  projectId: "netflixgpt-f5ee9",
  storageBucket: "netflixgpt-f5ee9.appspot.com",
  messagingSenderId: "266256662737",
  appId: "1:266256662737:web:6ceee7e5eda42c2aa485f0",
  measurementId: "G-8X7VF7S4YH"
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

export const auth = getAuth(app);

