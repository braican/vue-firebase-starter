import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// Uncomment for auth with Google
// export const auth = firebase.auth();
// export const authProvider = new firebase.auth.GoogleAuthProvider();
// export const currentUser = auth.currentUser;
