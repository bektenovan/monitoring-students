// Import the functions you need from the SDKs you need
import fire from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyAi8BENSf8j92vrCNjxY_wWono8AfEhs4g",
  authDomain: "final-project-hiking.firebaseapp.com",
  projectId: "final-project-hiking",
  storageBucket: "final-project-hiking.appspot.com",
  messagingSenderId: "6338197632",
  appId: "1:6338197632:web:bc0a9575e3cd810a37ce65"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default fire.initializeApp(firebaseConfig);
