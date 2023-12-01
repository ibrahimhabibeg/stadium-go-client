import { Linking } from "react-native";
import { Text } from "react-native-paper";
import { useCallback } from "react";

type URLLabelProps = {
  url: string;
};

const LocationURLLabel = ({ url}: URLLabelProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  }, [url]);
  return <Text variant="labelMedium" onPress={handlePress}>Open Location</Text>;
};

export default LocationURLLabel;