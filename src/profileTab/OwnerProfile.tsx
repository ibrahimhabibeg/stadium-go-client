import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { ActivityIndicator, Button, Text, Divider } from "react-native-paper";
import { Image, ScrollView, StyleSheet, View, FlatList } from "react-native";
import StadiumCard from "../stadiums/StadiumCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamList } from "../Navigators/Auth/Owner";
import { useContext } from "react";
import { AuthContext } from "../Providers/Auth";

const getOwnerProfileDataQuery = graphql(/* GraphQL */ `
  query GetOwnerProfileData($cursor: ID, $take: Int) {
    verifyOwner {
      ... on Owner {
        email
        username
        stadiums(cursor: $cursor, take: $take) {
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

type propsType = NativeStackScreenProps<ParamList, "authHome">;

const OwnerProfile = ({ navigation }: propsType) => {
  const { data, loading, fetchMore } = useQuery(getOwnerProfileDataQuery, {
    variables: { take: 10 },
  });
  const { logout } = useContext(AuthContext);

  const navigateToCreateStadium = () =>
    navigation.navigate("authCreateStadium");

  if (loading) return <ActivityIndicator />;
  else if (data.verifyOwner.__typename === "OwnerAuthorizationError") {
    return (
      <View>
        <Text>
          The following error occurred while connecting to the server:
          {data.verifyOwner.message}
        </Text>
      </View>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.mainView}>
        <Image
          source={require("../../assets/stadium.jpg")}
          style={styles.img}
        />
        <Text style={styles.username}>{data.verifyOwner.username}</Text>
        <Text>{data.verifyOwner.email}</Text>
        <Button onPress={logout}>Logout</Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={navigateToCreateStadium}
        >
          Create New Stadium
        </Button>
        <Text style={styles.myStadiumsText}>My Stadiums</Text>
        <FlatList
          keyExtractor={(stadium) => stadium.id}
          data={data.verifyOwner.stadiums}
          renderItem={({ item: stadium }) => (
            <StadiumCard key={stadium.id} stadium={stadium} />
          )}
          onEndReached={() => {
            fetchMore({
              variables: {
                cursor:
                  data.verifyOwner.__typename === "Owner"
                    ? data.verifyOwner.stadiums[
                        data.verifyOwner.stadiums.length - 1
                      ].id
                    : null,
              },
            });
          }}
          ItemSeparatorComponent={Divider}
        />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  },
  mainView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
  },
  button: {
    marginTop: 15,
    width: "75%",
  },
  myStadiumsText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default OwnerProfile;
