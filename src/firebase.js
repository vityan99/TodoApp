import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsANg8BrQqz-SfYXN2Ym5wWHtXoG3b9nc",
  authDomain: "todos-4442b.firebaseapp.com",
  databaseURL: "https://todos-4442b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todos-4442b",
  storageBucket: "todos-4442b.appspot.com",
  messagingSenderId: "1097287624725",
  appId: "1:1097287624725:web:a1870f5f7f58821bf0061c",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
