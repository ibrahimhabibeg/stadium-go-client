import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NotLoggedInParamList } from "../Navigators/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { graphql } from "../gql";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Providers/Auth";

type propsType = NativeStackScreenProps<NotLoggedInParamList, "authSignup">;

const loginMutation = graphql(/* GraphQL */ `
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      ... on UserAuthPayload {
        token
        user {
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

const Login = ({ navigation }: propsType) => {
  const auth = useContext(AuthContext);

  const [login, { data, loading, error: mutationError }] =
    useMutation(loginMutation);

  /**
   * Each value in errors shows the error meassage for the input field.
   * Empty string means no error
   */
  const [errors, setErrors] = useState({
    EMAIL: "",
    PASSWORD: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (data?.userLogin.__typename === "UserAuthPayload") {
      auth.login({
        id: data.userLogin.user.id,
        token: data.userLogin.token,
        isOwner: false,
      });
    } else if (data?.userLogin.__typename === "AuthError") {
      const { errorField, message } = data.userLogin;
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

  const toggleShowPassword = () => setShowPassword((val) => !val);

  const navigateToSignup = () => navigation.navigate("authSignup");

  const navigateToOwnerLogin = () => navigation.navigate("authOwnerLogin");

  const submit = () => login({ variables: loginData });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Login
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={loginData.email}
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
        value={loginData.password}
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
        <Text>Create new account?</Text>
        <Button onPress={navigateToSignup}>Signup</Button>
      </View>
      <View style={styles.linkContainer}>
        <Text>Have an account as a stadium owner?</Text>
        <Button onPress={navigateToOwnerLogin}>Login As Owner</Button>
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

export default Login;
