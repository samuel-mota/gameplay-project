import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />; // hold the splash until all fonts load
  }

  return (
    <Background>
      <StatusBar />
      {/* <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />  imported from react native*/}
      {/* <SignIn /> */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
