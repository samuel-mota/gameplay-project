import React from "react";
import { FlatList, View } from "react-native";
import { GuildProps } from "../../components/Appointment";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Outro",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "Outro",
      icon: null,
      owner: true,
    },
    {
      id: "4",
      name: "Outro",
      icon: null,
      owner: true,
    },
    {
      id: "5",
      name: "Outro",
      icon: null,
      owner: true,
    },
    {
      id: "6",
      name: "Outro",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  );
}
