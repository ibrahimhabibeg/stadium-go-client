import { Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NotLoggedInParamList } from "../Navigators/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { graphql } from "../gql";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Providers/Auth";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

type propsType = NativeStackScreenProps<NotLoggedInParamList, "authSignup">;

const loginMutation = graphql(/* GraphQL */ `
  mutation OwnerLogin($email: String!, $password: String!) {
    ownerLogin(email: $email, password: $password) {
      ... on OwnerAuthPayload {
        token
        owner {
          id
        }
      }
      ... on AuthError {
        errorField
        message
      }
    }
  }
`);

const OwnerLogin = ({ navigation }: propsType) => {
  const auth = useContext(AuthContext);

  const [login, { data, loading, error: mutationError }] =
    useMutation(loginMutation);

  const [errors, setErrors] = useState({
    EMAIL: "",
    PASSWORD: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (data?.ownerLogin.__typename === "OwnerAuthPayload") {
      auth.login({
        id: data.ownerLogin.owner.id,
        token: data.ownerLogin.token,
        isOwner: true,
      });
    } else if (data?.ownerLogin.__typename === "AuthError") {
      const { errorField, message } = data.ownerLogin;
      setErrors((oldVal) => ({ ...oldVal, [errorField]: message }));
    }
  }, [data]);

  const emailChangeTextHandler = (email: string) => {
    setLoginData((oldSignupData) => ({ ...oldSignupData, email }));
    setErrors((oldVal) => ({ ...oldVal, EMAIL: "" }));
  };

  const passwordChangeTextHandler = (password: string) => {
    setLoginData((oldSignupData) => ({ ...oldSignupData, password }));
    setErrors((oldVal) => ({ ...oldVal, PASSWORD: "" }));
  };

  const navigateToOwnerSignup = () => navigation.navigate("authOwnerSignup");

  const navigateToLogin = () => navigation.navigate("authLogin");

  const submit = () => login({ variables: loginData });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Login as Stadium Owner
      </Text>
      <EmailInput
        value={loginData.email}
        error={errors.EMAIL}
        onChangeText={emailChangeTextHandler}
      />
      <PasswordInput
        value={loginData.password}
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
        <Text>Create new account?</Text>
        <Button onPress={navigateToOwnerSignup}>Signup as Owner</Button>
      </View>
      <View style={styles.linkContainer}>
        <Text>Have an account as a stadium booker?</Text>
        <Button onPress={navigateToLogin}>Login As Booker</Button>
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

export default OwnerLogin;
