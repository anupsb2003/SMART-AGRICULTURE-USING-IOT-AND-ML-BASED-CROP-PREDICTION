import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXcT2fFn1-yhDY68J0OMamNZ8EJJvlEHA",
  authDomain: "capstone-1df50.firebaseapp.com",
  databaseURL:
    "https://capstone-1df50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-1df50",
  storageBucket: "capstone-1df50.firebasestorage.app",
  messagingSenderId: "704016001736",
  appId: "1:704016001736:web:dc46a038b71feaf642d3fd",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);