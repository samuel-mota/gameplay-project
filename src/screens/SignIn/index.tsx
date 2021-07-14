import React from "react";
// import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  // const navigation = useNavigation();
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    // navigation.navigate("Home");
    try {
      await signIn();
    } catch (error) {
      console.log("ERROR SignIn component: ", error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
