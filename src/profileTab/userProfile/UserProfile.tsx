import { useQuery } from "@apollo/client";
import { ActivityIndicator, Button, Text, Avatar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import getUserProfileDataQuery from "./getUserProfileDataQuery";

const UserProfile = () => {
  const { data, loading } = useQuery(getUserProfileDataQuery);
  const { logout } = useContext(AuthContext);

  if (loading) return <ActivityIndicator />;
  else if (data.verifyUser.__typename === "UserAuthorizationError") {
    return (
      <View>
        <Text>
          The following error occurred while connecting to the server:
          {data.verifyUser.message}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.mainView}>
        <Avatar.Text
          label={data.verifyUser.username.substring(0, 1).toUpperCase()}
          style={{ marginTop: 20 }}
        />
        <Text style={styles.username}>{data.verifyUser.username}</Text>
        <Text>{data.verifyUser.email}</Text>
        <Button onPress={logout}>Logout</Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
  },
});

export default UserProfile;
