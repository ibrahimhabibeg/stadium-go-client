import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { graphql } from "../../gql";
import { CreateStadiumInput } from "../../gql/graphql";
import { useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamList } from "../../Navigators/profile/OwnerProfileNav";
import LocationSelector from "../../location/LocationSelector";
import type { Region } from "react-native-maps";
import CitySelector from "./CitySelector";

const createStadiumMutation = graphql(`
  mutation Mutation($stadiumData: createStadiumInput!) {
    createStadium(stadiumData: $stadiumData) {
      ... on Stadium {
        id
      }
    }
  }
`);

type propsType = NativeStackScreenProps<ParamList, "authCreateStadium">;

const CreateStadium = ({ navigation }: propsType) => {
  const [stadiumData, setStadiumData] = useState<CreateStadiumInput>({
    name: "",
    size: 5,
  });

  const [region, setRegion] = useState<Region>({
    latitude: 31.25,
    longitude: 32.3,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [createStadium, { loading, data }] = useMutation(
    createStadiumMutation,
    { refetchQueries: ["GetOwnerProfileData"] }
  );

  useEffect(() => {
    if (data?.createStadium.__typename === "Stadium") {
      navigation.navigate("authHome");
    }
  }, [data]);

  const nameChangeHandler = (name: string) =>
    setStadiumData((oldStadiumData) => ({ ...oldStadiumData, name }));

  const descChangeHandler = (desc: string) =>
    setStadiumData((oldStadiumData) => ({ ...oldStadiumData, desc }));

  const sizeChangeHandler = (size: string) =>
    setStadiumData((oldStadiumData) => ({ ...oldStadiumData, size }));

  const regionChangeHandler = (region: Region) => setRegion(region);

  const cityChangeHandler = (cityId: string) =>
    setStadiumData((oldStadiumData) => ({ ...oldStadiumData, cityId }));

  const submit = () =>
    createStadium({
      variables: {
        stadiumData: {
          latitude: region.latitude,
          longitude: region.longitude,
          ...stadiumData,
        },
      },
    });

  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <Text style={styles.title}>Create New Stadium</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Name"
        value={stadiumData.name}
        onChangeText={nameChangeHandler}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Description"
        value={stadiumData.desc}
        onChangeText={descChangeHandler}
        multiline={true}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Size"
        value={String(stadiumData.size)}
        onChangeText={sizeChangeHandler}
        keyboardType="numeric"
      />
      <CitySelector cityId={stadiumData.cityId} onChangeCity={cityChangeHandler}/>
      <Text variant="bodyMedium" style={styles.locationText}>
        Location
      </Text>
      <LocationSelector region={region} onRegionChange={regionChangeHandler} />
      <Button
        style={styles.button}
        mode="contained"
        loading={loading}
        onPress={submit}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "80%",
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    marginVertical: 40,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    maxWidth: 450,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: "80%",
    maxWidth: 450,
    marginBottom: 30,
    alignSelf: "center",
  },
  locationText: {
    width: "80%",
    marginTop: 10,
  },
});

export default CreateStadium;
