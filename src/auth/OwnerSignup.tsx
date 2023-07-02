import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NotLoggedInParamList } from "../Navigators/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { graphql } from "../gql";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Providers/Auth";

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

  /**
   * Each value in errors shows the error meassage for the input field.
   * Empty string means no error
   */
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
  const [showPassword, setShowPassword] = useState(false);

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

  const toggleShowPassword = () => setShowPassword((val) => !val);

  const navigateToOwnerLogin = () => navigation.navigate("authOwnerLogin");

  const navigateToSignup = () => navigation.navigate("authSignup");

  const submit = () => signup({ variables: { signupData } });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Create Account as Owner
      </Text>
      <TextInput
        mode="outlined"
        label="Username"
        value={signupData.username}
        onChangeText={usernameChangeTextHandler}
        style={styles.input}
        error={errors.USERNAME !== ""}
      />
      <HelperText type="error" visible={errors.USERNAME !== ""}>
        {errors.USERNAME}
      </HelperText>
      <TextInput
        mode="outlined"
        label="Email"
        value={signupData.email}
        onChangeText={emailChangeTextHandler}
        style={styles.input}
        error={errors.EMAIL !== ""}
      />
      <HelperText type="error" visible={errors.EMAIL !== ""}>
        {errors.EMAIL}
      </HelperText>
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
        error={errors.PASSWORD !== ""}
      />
      <HelperText type="error" visible={errors.PASSWORD !== ""}>
        {errors.PASSWORD}
      </HelperText>
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
  input: {
    marginTop: "2%",
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
