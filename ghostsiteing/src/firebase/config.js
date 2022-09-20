import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFpvub8qCie5O_2XDBk_BQsDAbR2cFYho",
  authDomain: "ghostsiteing.firebaseapp.com",
  projectId: "ghostsiteing",
  storageBucket: "ghostsiteing.appspot.com",
  messagingSenderId: "155869898285",
  appId: "1:155869898285:web:f63020b368e3390fd9faa4"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app