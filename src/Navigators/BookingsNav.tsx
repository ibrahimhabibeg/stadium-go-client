import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingsHome from "../bookings/BookingsHome";

type StackParamList = {
  bookingsHome: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const BookingsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bookingsHome"
        options={{ title: "My Bookings" }}
        component={BookingsHome}
      />
    </Stack.Navigator>
  );
};

export default BookingsNav;
