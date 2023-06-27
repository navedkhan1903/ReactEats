import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC5oXz6-aaeB6l5OkWvZcmcWm4j7-SjaQ",
  authDomain: "reacteats-884d9.firebaseapp.com",
  databaseURL: "https://reacteats-884d9-default-rtdb.firebaseio.com",
  projectId: "reacteats-884d9",
  storageBucket: "reacteats-884d9.appspot.com",
  messagingSenderId: "760952164980",
  appId: "1:760952164980:web:58fe8a497ca8f7b0847721"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);