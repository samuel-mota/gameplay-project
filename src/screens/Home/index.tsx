import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";

import { Appointment, AppointmentData } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";

import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  const navigation = useNavigation();

  // const appointments = [
  //   {
  //     id: "1",
  //     guild: {
  //       id: "1",
  //       name: "Lendários",
  //       icon: null,
  //       owner: true,
  //     },
  //     category: "1",
  //     date: "22/06 às 20:40h",
  //     description:
  //       "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  //   },
  //   {
  //     id: "2",
  //     guild: {
  //       id: "1",
  //       name: "Lendários",
  //       icon: null,
  //       owner: true,
  //     },
  //     category: "1",
  //     date: "22/06 às 20:40h",
  //     description:
  //       "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  //   },
  // ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId); // para marcar e desmarcar
  }

  function handleAppointmentDetails(guildSelected: AppointmentData) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentData[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    // useFocusEffect atualiza a pagina sempre que a pagina eh focada, quando voltar a ficar ativa
    useCallback(() => {
      // useCallback salva a referencia da função na memoria e evita chamar varias vezes
      loadAppointments();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
          />
        </>
      )}
    </Background>
  );
}
