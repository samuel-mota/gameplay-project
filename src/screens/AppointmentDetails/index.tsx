import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from "../../assets/banner.png";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Samuel",
      avatar_url: "https://github.com/samuel-mota.png",
      status: "online",
    },
    {
      id: "2",
      username: "Samuel",
      avatar_url: "https://github.com/samuel-mota.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList data={members} keyExtractor={item => item.id} renderItem={({item}) => ()} />
    </Background>
  );
}
