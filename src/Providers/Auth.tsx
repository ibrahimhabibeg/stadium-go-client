import { createContext, useState } from "react";

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
  logout: () => {},
  login: (param: LoginParameter) => {},
});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isOwner: false,
    token: "",
    id: "",
  });

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      isOwner: false,
      token: "",
      id: "",
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
