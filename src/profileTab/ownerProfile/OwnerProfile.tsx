import { useQuery } from "@apollo/client";
import { ActivityIndicator, Button, Text, Avatar } from "react-native-paper";
import { StyleSheet, View, FlatList } from "react-native";
import StadiumCard from "../../stadiums/StadiumCard/StadiumCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamList } from "../../Navigators/profile/OwnerProfileNav";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import getOwnerProfileDataQuery from "./getOwnerProfileDataQuery";

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
      <FlatList
        ListHeaderComponent={
          <View style={styles.mainView}>
            <Avatar.Text
              label={data.verifyOwner.username.substring(0, 1).toUpperCase()}
              style={{ marginTop: 20 }}
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
          </View>
        }
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
      />
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
