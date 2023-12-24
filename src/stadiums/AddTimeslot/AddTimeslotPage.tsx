import { useEffect, useState } from "react";
import { Text, Divider, Button, Portal, Snackbar } from "react-native-paper";
import { View } from "react-native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
import PricePicker from "./PricePicker";
import DateRangePicker from "./DateRangePicker";
import { useMutation } from "@apollo/client";
import addTimeslotMutation from "./addTimeslotMutation";
import { useNavigation } from "@react-navigation/native";

const AddTimeslotPage = ({ route }: propsType) => {
  const { stadiumId } = route.params;
  const initialDate = new Date();
  initialDate.setSeconds(0);
  initialDate.setMilliseconds(0);
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const [endDate, setEndDate] = useState<Date>(initialDate);
  const [price, setPrice] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [addTimeslot, { data, loading }] = useMutation(addTimeslotMutation, {
    variables: {
      timeslotData: {
        stadiumId,
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
        price: Number(price),
      },
    },
  });
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    if (
      data?.addTimeslot.__typename === "InvalidTimeslotDataError" ||
      data?.addTimeslot.__typename === "OwnerAuthorizationError"
    ) {
      setIsErrorVisible(true);
      setErrorMessage(data.addTimeslot.message);
    } else if (data?.addTimeslot.__typename === "Timeslot") {
      navigation.navigate("stadiumsStadium", { id: stadiumId });
    }
  }, [data]);

  return (
    <View
      style={{
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <Text variant="titleMedium" style={{ marginTop: 20 }}>
        New Timeslot Data
      </Text>
      <Divider style={{ width: "90%", marginVertical: 20 }} />
      <DateRangePicker
        startDate={startDate}
        onChangeStartDate={setStartDate}
        endDate={endDate}
        onChangeEndDate={setEndDate}
      />
      <PricePicker price={price} onPriceChange={setPrice} />
      <Button
        mode="contained"
        loading={loading}
        onPress={() => addTimeslot()}
        style={{ width: "80%", marginTop: 30 }}
      >
        Add Timeslot
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
    </View>
  );
};

type propsType = NativeStackScreenProps<StackParamList, "stadiumsAddTimeslot">;

export default AddTimeslotPage;
