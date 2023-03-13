import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  //    apiKey: "AIzaSyC94LdQnYMbfsbCoyg4VP2GuC4yhY2PoQk",
  //   authDomain: "movie-app-cfe3c.firebaseapp.com",
  //   projectId: "movie-app-cfe3c",
  //   storageBucket: "movie-app-cfe3c.appspot.com",
  //   messagingSenderId: "125040196160",
  //   appId: "1:125040196160:web:4f949a935e66b408c07da5"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
