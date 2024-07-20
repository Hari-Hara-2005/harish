import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAY7PwwIiSoGDUtBpCi6W0MqH_uLDD9Xe8",
  authDomain: "login-a8f81.firebaseapp.com",
  projectId: "login-a8f81",
  storageBucket: "login-a8f81.appspot.com",
  messagingSenderId: "658324741339",
  appId: "1:658324741339:web:9ae4987d89c39011a600fe",
  measurementId: "G-W6NFFDN4FT"
};
const app = firebase.initializeApp(firebaseConfig);
export const auth =app.auth();

export default app;
