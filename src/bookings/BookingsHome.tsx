import { Text } from "react-native-paper";
import ToggleableView from "../components/ToggleableView";
import BookingCard from "./BookingCard";

const BookingsHome = () => {
  return (
    <>
      <Text>Bookings Tab</Text>
      <ToggleableView title="Live Bookings" isExpandedOnStart={true}>
        <BookingCard
          stadiumName="dsfgsdfgsdfg sdfgdsfgsdfgdsf gsdfgsdfgsdfgdsfgsdfg sdfgsdfg"
          city="Cairo"
          owner="Mohsen"
          startTime={new Date()}
          endTime={new Date()}
          price={200}
          style={{
            marginTop: 10
          }}
        />
      </ToggleableView>
    </>
  );
};

export default BookingsHome;
