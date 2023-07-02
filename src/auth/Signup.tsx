import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { NotLoggedInParamList } from "../Navigators/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type propsType = NativeStackScreenProps<NotLoggedInParamList, "authSignup">;

const Signup = ({ navigation }: propsType) => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const usernameChangeTextHandler = (username: string) =>
    setSignupData((oldSignupData) => ({ ...oldSignupData, username }));

  const emailChangeTextHandler = (email: string) =>
    setSignupData((oldSignupData) => ({ ...oldSignupData, email }));

  const passwordChangeTextHandler = (password: string) =>
    setSignupData((oldSignupData) => ({ ...oldSignupData, password }));

  const toggleShowPassword = () => setShowPassword((val) => !val);

  const navigateToLogin = () => navigation.navigate("authLogin");

  const navigateToOwnerSignup = () => navigation.navigate("authOwnerSignup");

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Create Account
      </Text>
      <TextInput
        mode="outlined"
        label="Username"
        value={signupData.username}
        onChangeText={usernameChangeTextHandler}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Email"
        value={signupData.email}
        onChangeText={emailChangeTextHandler}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={signupData.password}
        onChangeText={passwordChangeTextHandler}
        style={styles.input}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={toggleShowPassword}
          />
        }
      />
      <Button mode="contained" style={styles.button}>
        Submit
      </Button>
      <View style={styles.linkContainer}>
        <Text>Already have an account?</Text>
        <Button onPress={navigateToLogin}>Login</Button>
      </View>
      <View style={styles.linkContainer}>
        <Text>Want to rent your stadiums?</Text>
        <Button onPress={navigateToOwnerSignup}>Signup As Owner</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    width: "80%",
    alignSelf: "center",
    maxWidth: 500,
  },
  title: {
    marginBottom: "10%",
    alignSelf: "center",
  },
  input: {
    marginBottom: "2%",
  },
  button: {
    marginTop: "5%",
    marginBottom: "15%",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
