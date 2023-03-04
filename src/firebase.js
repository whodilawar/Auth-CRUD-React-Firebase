// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys

const firebaseConfig = {
  apiKey: "AIzaSyBf1J_mRxm7-TRPTeajmhuANIOmZ6Rt8t4",
  authDomain: "trendsofttechassign.firebaseapp.com",
  projectId: "trendsofttechassign",
  storageBucket: "trendsofttechassign.appspot.com",
  messagingSenderId: "377918302315",
  appId: "1:377918302315:web:4919c3cadef2e8adfbe92e",
  measurementId: "G-HQZX2RRP2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);