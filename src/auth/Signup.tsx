import { Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NotLoggedInParamList } from "../Navigators/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { graphql } from "../gql";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Providers/Auth";
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

type propsType = NativeStackScreenProps<NotLoggedInParamList, "authSignup">;

const signupMutation = graphql(/* GraphQL */ `
  mutation UserSignup($signupData: SignupInput!) {
    userSignup(signupData: $signupData) {
      ... on UserAuthPayload {
        token
        user {
          id
        }
      }
      ... on AuthError {
        message
        errorField
      }
    }
  }
`);

const Signup = ({ navigation }: propsType) => {
  const auth = useContext(AuthContext);

  const [signup, { data, loading, error: mutationError }] =
    useMutation(signupMutation);

  const [errors, setErrors] = useState({
    USERNAME: "",
    EMAIL: "",
    PASSWORD: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data?.userSignup.__typename === "UserAuthPayload") {
      auth.login({
        id: data.userSignup.user.id,
        token: data.userSignup.token,
        isOwner: false,
      });
    } else if (data?.userSignup.__typename === "AuthError") {
      const { errorField, message } = data.userSignup;
      setErrors((oldVal) => ({ ...oldVal, [errorField]: message }));
    }
  }, [data]);

  const usernameChangeTextHandler = (username: string) => {
    setSignupData((oldSignupData) => ({ ...oldSignupData, username }));
    setErrors((oldVal) => ({ ...oldVal, USERNAME: "" }));
  };

  const emailChangeTextHandler = (email: string) => {
    setSignupData((oldSignupData) => ({ ...oldSignupData, email }));
    setErrors((oldVal) => ({ ...oldVal, EMAIL: "" }));
  };

  const passwordChangeTextHandler = (password: string) => {
    setSignupData((oldSignupData) => ({ ...oldSignupData, password }));
    setErrors((oldVal) => ({ ...oldVal, PASSWORD: "" }));
  };

  const navigateToLogin = () => navigation.navigate("authLogin");

  const navigateToOwnerSignup = () => navigation.navigate("authOwnerSignup");

  const submit = () => signup({ variables: { signupData } });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Create Account
      </Text>
      <UsernameInput
        value={signupData.username}
        error={errors.USERNAME}
        onChangeText={usernameChangeTextHandler}
      />
      <EmailInput
        value={signupData.email}
        error={errors.EMAIL}
        onChangeText={emailChangeTextHandler}
      />
      <PasswordInput
        value={signupData.password}
        error={errors.PASSWORD}
        onChangeText={passwordChangeTextHandler}
      />
      <Button
        mode="contained"
        style={styles.button}
        loading={loading}
        onPress={submit}
      >
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
