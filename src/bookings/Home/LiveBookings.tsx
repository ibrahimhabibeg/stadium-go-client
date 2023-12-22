import ToggleableView from "../../components/ToggleableView";
import BookingCard from "./BookingCard";
import { View } from "react-native";

const LiveBookings = ({ bookings }: propsType) => {
  return (
    <ToggleableView
      isExpandedOnStart={true}
      title="Live Bookings"
      style={{
        marginTop: 20,
      }}
    >
      <View>
        {bookings.map((booking) => (
          <BookingCard
            stadiumName={booking.stadium.name}
            startTime={new Date(booking.startTime)}
            endTime={new Date(booking.endTime)}
            owner={booking.stadium.owner.username}
            price={booking.price}
            city={booking.stadium?.city.name}
          />
        ))}
      </View>
    </ToggleableView>
  );
};

type propsType = {
  bookings: booking[];
};

type booking = {
  __typename?: "Timeslot";
  endTime: any;
  price: number;
  startTime: any;
  stadium: {
    __typename?: "Stadium";
    name: string;
    owner: {
      __typename?: "Owner";
      username: string;
    };
    city?: {
      __typename?: "City";
      name: string;
    } | null;
  };
};

export default LiveBookings;
