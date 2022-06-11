import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6sb6tYBbDyKY63aaPd7RG6yss-_2J1c",
  authDomain: "mealstogo-88089.firebaseapp.com",
  projectId: "mealstogo-88089",
  storageBucket: "mealstogo-88089.appspot.com",
  messagingSenderId: "159902997203",
  appId: "1:159902997203:web:179f40404419ea076bd226",
  measurementId: "G-087T10489Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/


const firebaseConfig = {
  apiKey: "AIzaSyCz6sb6tYBbDyKY63aaPd7RG6yss-_2J1c",
  authDomain: "mealstogo-88089.firebaseapp.com",
  projectId: "mealstogo-88089",
  storageBucket: "mealstogo-88089.appspot.com",
  messagingSenderId: "159902997203",
  appId: "1:159902997203:web:179f40404419ea076bd226",
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
