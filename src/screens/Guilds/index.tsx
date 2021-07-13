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
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
