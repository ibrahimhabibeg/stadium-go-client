import { createContext, useState } from "react";

type LoginParameter = {
  isOwner: boolean;
  token: string;
  id: number;
};

export const AuthContext = createContext({
  isLoggedIn: false,
  isOwner: false,
  token: "",
  id: 0,
  logout: () => {},
  login: (param: LoginParameter) => {},
});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isOwner: false,
    token: "",
    id: 0,
  });

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      isOwner: false,
      token: "",
      id: 0,
    });
  };

  const login = ({ id, token, isOwner }: LoginParameter) => {
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
        ...authState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
