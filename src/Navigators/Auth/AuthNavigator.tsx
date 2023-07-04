import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import NotAuth from "./NotAuth";
import User from "./User";
import Owner from "./Owner";

const AuthNavigaor = () => {
  const { isOwner, isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) return <NotAuth/>;
  else if (isOwner) return <Owner/>;
  else return <User/>;
};

export default AuthNavigaor;
