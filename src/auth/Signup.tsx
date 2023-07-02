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

  /**
   * Each value in errors shows the error meassage for the input field.
   * Empty string means no error
   */
  const [errors, setErrors] = useState({
    USERNAME: "",
    EMAIL: "",
    PASSWORD: "",
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

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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

  const navigateToLogin = () => navigation.navigate("authLogin");

  const navigateToOwnerSignup = () => navigation.navigate("authOwnerSignup");

  const submit = () => signup({ variables: { signupData } });

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

export default Signup;
