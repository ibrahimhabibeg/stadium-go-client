import { TextInput, HelperText } from "react-native-paper";
import { StyleSheet } from "react-native";

type propsType = {
  value: string;
  error: string;
  onChangeText: (username: string) => void;
};

const UsernameInput = ({ value, error, onChangeText }: propsType) => (
  <>
    <TextInput
      mode="outlined"
      label="Username"
      value={value}
      onChangeText={onChangeText}
      error={!!error}
      style={styles.input}
    />
    <HelperText type="error" visible={!!error}>
      {error}
    </HelperText>
  </>
);

const styles = StyleSheet.create({ input: { marginTop: "2%" } });

export default UsernameInput;
