import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Auth";
import { graphql } from "../../gql";
import { useQuery } from "@apollo/client";

export type ParamList = {
  authHome: undefined;
};

const getOwneUsernameQuery = graphql(/* GraphQL */ `
  query GetOwnerUsername {
    verifyOwner {
      ... on Owner {
        username
      }
    }
  }
`);

const Stack = createNativeStackNavigator<ParamList>();

const Owner = () => {
  const { logout } = useContext(AuthContext);
  const { data } = useQuery(getOwneUsernameQuery);
  const [homeTitle, setHomeTitle] = useState("Loading ...");

  useEffect(() => {
    if (data?.verifyOwner.__typename === "OwnerAuthorizationError") logout();
    if (data?.verifyOwner.__typename === "Owner")
      setHomeTitle(data.verifyOwner.username);
  }, [data]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authHome"
        options={{ title: homeTitle }}
        component={() => <Text>Owner</Text>}
      />
    </Stack.Navigator>
  );
};

export default Owner;