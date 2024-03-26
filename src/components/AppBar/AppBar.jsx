import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import {  useState } from "react";

export const AppBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </>
  );
};