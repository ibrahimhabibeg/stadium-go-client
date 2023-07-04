import { createContext, useEffect, useState } from "react";
import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store";
import { client } from "./Apollo";
import { TOKEN_KEY, ID_KEY, IS_OWNER_KEY } from "../config/secureStore";

type LoginParameter = {
  isOwner: boolean;
  token: string;
  id: string;
};

export const AuthContext = createContext({
  isLoggedIn: false,
  isOwner: false,
  token: "",
  id: "",
  logout: async () => {},
  login: async (param: LoginParameter) => {},
});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isOwner: false,
    token: "",
    id: "",
  });

  const setDefaultState = async () => {
    const token = await getItemAsync(TOKEN_KEY);
    const id = await getItemAsync(ID_KEY);
    const isOwner = await getItemAsync(IS_OWNER_KEY);
    if (!token || !id || !isOwner)
      setAuthState({ isLoggedIn: false, isOwner: false, token: "", id: "" });
    else
      setAuthState({
        id,
        token,
        isOwner: isOwner === "true",
        isLoggedIn: true,
      });
  };

  useEffect(() => {
    setDefaultState();
  }, []);

  const logout = async () => {
    setAuthState({
      isLoggedIn: false,
      isOwner: false,
      token: "",
      id: "",
    });
    await deleteItemAsync(ID_KEY);
    await deleteItemAsync(TOKEN_KEY);
    await deleteItemAsync(IS_OWNER_KEY);
    client.resetStore();
  };

  const login = async ({ id, token, isOwner }: LoginParameter) => {
    await setItemAsync(ID_KEY, id);
    await setItemAsync(TOKEN_KEY, token);    
    await setItemAsync(IS_OWNER_KEY, String(isOwner));
    setAuthState({
      id,
      token,
      isOwner,
      isLoggedIn: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        ...authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
