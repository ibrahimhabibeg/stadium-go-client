import { Text } from "react-native-paper";
import ToggleableView from "../components/ToggleableView";

const BookingsHome = () => {
  return (
    <>
      <Text>Bookings Tab</Text>
      <ToggleableView title="Live Bookings" isExpandedOnStart={true}>
        <Text>Testing</Text>
      </ToggleableView>
    </>
  );
};

export default BookingsHome;
