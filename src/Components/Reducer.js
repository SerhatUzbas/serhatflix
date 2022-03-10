// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYoEA2GZaQOJ9fETSlvrZqvIozaFg_ZxA",
  authDomain: "netflix-e7d0d.firebaseapp.com",
  databaseURL:
    "https://netflix-e7d0d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-e7d0d",
  storageBucket: "netflix-e7d0d.appspot.com",
  messagingSenderId: "923548543078",
  appId: "1:923548543078:web:b4c477b837c2cb6108e5a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const writeDB = (movie, id) => {
  set(ref(db, `${id}`), movie);
};

const deleteMovie = (id) => {
  remove(ref(db, `${id}`));
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE":
      action.payload.bookmarked = false;
      deleteMovie(action.payload.id);
      return;

    case "ADD":
      action.payload.bookmarked = true;
      // postMovie(action.payload);
      writeDB(action.payload, action.payload.id);
      return;

    case "RESET":
      return state.filter((mov) => mov === false);

    case "SET":
      for (let key in action.payload) {
        state.push(action.payload[key]);
      }

      return state;

    default:
      return state;
  }
};

export default Reducer;
