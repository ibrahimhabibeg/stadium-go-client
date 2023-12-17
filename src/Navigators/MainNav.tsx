import { useContext } from "react";
import { AuthContext } from "../Providers/Auth";
import NotAuthNav from "./auth/NotAuthNav";
import UserNav from "./auth/UserNav";
import OwnerNav from "./auth/OwnerNav";

const MainNav = () => {
  const { isOwner, isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) return <NotAuthNav/>;
  else if (isOwner) return <OwnerNav/>;
  else return <UserNav/>;
};

export default MainNav;
