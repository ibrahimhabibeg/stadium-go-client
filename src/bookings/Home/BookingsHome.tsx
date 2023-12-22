import { useQuery } from "@apollo/client";
import getBookingsQuery from "./getBookingsQuery";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import LiveBookings from "./LiveBookings";
import UpcomingBookings from "./UpcomingBookings";
import PreviousBookings from "./PreviousBookings";

const BookingsHome = () => {
  const { data } = useQuery(getBookingsQuery);

  if (data?.verifyUser.__typename === "User")
    return (
      <ScrollView>
        <LiveBookings bookings={data.verifyUser.currentTimeslots} />
        <UpcomingBookings bookings={data.verifyUser.upcomingTimeslots} />
        <PreviousBookings bookings={data.verifyUser.previousTimeslots} />
      </ScrollView>
    );
  else return <ActivityIndicator />;
};

export default BookingsHome;
