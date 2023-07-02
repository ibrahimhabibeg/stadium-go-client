import { TextInput, HelperText } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useState } from "react";

type propsType = {
  value: string;
  error: string;
  onChangeText: (username: string) => void;
};

const PasswordInput = ({ value, error, onChangeText }: propsType) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((val) => !val);

  return (
    <>
      <TextInput
        mode="outlined"
        label="Password"
        value={value}
        onChangeText={onChangeText}
        error={!!error}
        secureTextEntry={!showPassword}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={toggleShowPassword}
          />
        }
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

const styles = StyleSheet.create({ input: { marginTop: "2%" } });

export default PasswordInput;
