

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB2ixavs8p_hxAl_JF5GRLK-7OMn_sTmMY",
  authDomain: "anonymous-5a3e6.firebaseapp.com",
  projectId: "anonymous-5a3e6",
  storageBucket: "anonymous-5a3e6.appspot.com",
  messagingSenderId: "388742682662",
  appId: "1:388742682662:web:17b50e1d0c8920e6862ee7",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
