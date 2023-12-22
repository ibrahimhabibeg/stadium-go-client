import ToggleableView from "../../components/ToggleableView";
import BookingCard from "./BookingCard";
import { View } from "react-native";

const UpcomingBookings = ({ bookings }: propsType) => {
  return (
    <ToggleableView
      isExpandedOnStart={true}
      title="Upcoming Bookings"
      style={{
        marginTop: 20,
      }}
    >
      <View>
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            stadiumName={booking.stadium.name}
            startTime={new Date(booking.startTime)}
            endTime={new Date(booking.endTime)}
            owner={booking.stadium.owner.username}
            price={booking.price}
            city={booking.stadium?.city.name}
            style={{
              marginTop: 15,
            }}
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
  id: string;
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

export default UpcomingBookings;
