import { useMutation } from "@apollo/client";
import { StyleProp, View, ViewStyle } from "react-native";
import {
  Button,
  Card,
  IconButton,
  Text,
  Portal,
  Snackbar,
} from "react-native-paper";
import bookTimeslotMutation from "./bookTimeslotMutation";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabParamList } from "../../../Navigators/auth/UserNav";

const BookableTimeslot = ({
  id,
  price,
  startTime,
  endTime,
  style,
}: propsType) => {
  const [bookTimeslot, { data, loading }] = useMutation(bookTimeslotMutation, {
    variables: { timeslotId: id },
  });
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<TabParamList>>();

  useEffect(() => {
    if (
      data?.bookTimeslot.__typename === "BookTimeslotError" ||
      data?.bookTimeslot.__typename === "UserAuthorizationError"
    ) {
      setIsErrorVisible(true);
      setErrorMessage(data.bookTimeslot.message);
    } else if (data?.bookTimeslot.__typename === "Timeslot") {
      navigation.navigate("Bookings");
    }
  }, [data]);

  return (
    <Card style={style} contentStyle={{ height: 250 }}>
      <View
        style={{
          justifyContent: "space-between",
          paddingVertical: "5%",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-in"} />
          <Text numberOfLines={3}>{startTime.toUTCString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-out"} />
          <Text numberOfLines={3}>{endTime.toUTCString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"cash"} />
          <Text numberOfLines={3}>{price} EGP</Text>
        </View>
      </View>
      <Button
        mode="contained-tonal"
        style={{ width: "80%", alignSelf: "center" }}
        loading={loading}
        onPress={() => bookTimeslot()}
      >
        Book Timeslot
      </Button>
      <Portal>
        <Snackbar
          visible={isErrorVisible}
          onDismiss={() => setIsErrorVisible(false)}
          action={{
            label: "close",
          }}
        >
          {errorMessage}
        </Snackbar>
      </Portal>
    </Card>
  );
};

type propsType = {
  id: string;
  price: number;
  startTime: Date;
  endTime: Date;
  style?: StyleProp<ViewStyle>;
};
export default BookableTimeslot;
