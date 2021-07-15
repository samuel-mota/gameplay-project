import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { GuildData } from "../../components/Guild";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";

type GuildsProps = {
  handleGuildSelect: (guild: GuildData) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  // const guilds = [
  //   {
  //     id: "1",
  //     name: "Lendários",
  //     icon: "image.png",
  //     owner: true,
  //   },
  //   {
  //     id: "2",
  //     name: "Outro",
  //     icon: null,
  //     owner: true,
  //   },
  // ];

  const [loading, setLoading] = useState(true);
  const [guilds, setGuilds] = useState<GuildData[]>([]);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
}
