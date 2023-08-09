import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { graphql } from "../gql";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import StadiumCard from "../stadiums/StadiumCard";

const getOwnerProfileDataQuery = graphql(/* GraphQL */ `
  query GetOwnerProfileData {
    verifyOwner {
      ... on Owner {
        email
        username
        stadiums {
          id
          name
          size
          location {
            latitude
            longitude
          }
          owner {
            username
          }
        }
      }
      ... on OwnerAuthorizationError {
        message
      }
    }
  }
`);

const OwnerProfile = () => {
  const { data, loading } = useQuery(getOwnerProfileDataQuery);
  if (loading) return <ActivityIndicator />;
  else if (data.verifyOwner.__typename === "OwnerAuthorizationError") {
    return (
      <View>
        <Text>
          The following error occurred while connecting to the server:{" "}
          {data.verifyOwner.message}
        </Text>
      </View>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.mainView}>
        <Image source={require("../../assets/stadium.jpg")} style={styles.img}/>
        <Text style={styles.username}>{data.verifyOwner.username}</Text>
        <Text>{data.verifyOwner.email}</Text>
        <Button style={styles.button} mode="contained">Create New Stadium</Button>
        <Text style={styles.myStadiumsText}>My Stadiums</Text>
        <View>
          {data.verifyOwner.stadiums.map((stadium) => (
            <StadiumCard stadium={stadium}></StadiumCard>
          ))}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  img:{
    width:120,
    height: 120,
    borderRadius: 60,
    marginTop: 20
  },
  mainView: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center"
  },
  username: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    width: "75%"
  },
  myStadiumsText:{
    fontSize: 20,
    marginTop: 20
  }
});

export default OwnerProfile;
