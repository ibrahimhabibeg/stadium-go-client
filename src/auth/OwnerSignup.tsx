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
  mutation OwnerSignup($signupData: SignupInput!) {
    ownerSignup(signupData: $signupData) {
      ... on AuthError {
        message
        errorField
      }
      ... on OwnerAuthPayload {
        token
        owner {
          id
        }
      }
    }
  }
`);

const OwnerSignup = ({ navigation }: propsType) => {
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
    if (data?.ownerSignup.__typename === "OwnerAuthPayload") {
      auth.login({
        id: data.ownerSignup.owner.id,
        token: data.ownerSignup.token,
        isOwner: true,
      });
    } else if (data?.ownerSignup.__typename === "AuthError") {
      const { errorField, message } = data.ownerSignup;
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

  const navigateToOwnerLogin = () => navigation.navigate("authOwnerLogin");

  const navigateToSignup = () => navigation.navigate("authSignup");

  const submit = () => signup({ variables: { signupData } });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Create Account as Owner
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
        <Button onPress={navigateToOwnerLogin}>Login as Owner</Button>
      </View>
      <View style={styles.linkContainer}>
        <Text>Want to book stadiums?</Text>
        <Button onPress={navigateToSignup}>Signup As a Stadium Booker</Button>
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

export default OwnerSignup;
