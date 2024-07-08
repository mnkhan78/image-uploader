import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhz5I01mJiouadFrJMcwBpZokTQnkD-fc",
  authDomain: "image-uploader-mnk404.firebaseapp.com",
  projectId: "image-uploader-mnk404",
  storageBucket: "image-uploader-mnk404.appspot.com",
  messagingSenderId: "927302573457",
  appId: "1:927302573457:web:1210c9704237a114e0ce30",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
