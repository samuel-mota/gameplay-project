import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { GuildIcon } from "../GuildIcon";

export type GuildData = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type GuildProps = TouchableOpacityProps & {
  data: GuildData;
};

export function Guild({ data, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
