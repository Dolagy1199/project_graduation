import React, { useEffect, useState } from "react";
import PagesRoutes from "../pages/UserRoute";
import Cookies from "js-cookie";
import CircularIndeterminate from "./CircularIndeterminate";
import GuestRoute from "../pages/GuestRoute";
import { authorizedAPIs } from "../API/axiosSetup";

const token = Cookies.get(process.env.REACT_APP_TOKEN_NAME);

const Handleauthintication = () => {
  const [isLogged, setIslogged] = useState(true);
  const [isloading, setIsloading] = useState(true);

  const handleLogOut = () => Cookies.remove(process.env.REACT_APP_TOKEN_NAME);

  useEffect(() => {
    authorizedAPIs
      .post("/authintication/authinticate",
        JSON.stringify({ token, }))
      .then(() => {
        setIslogged(true);
        setIsloading(false);
      })
      .catch((error) => {
        setIslogged(false);
        setIsloading(false);
        handleLogOut();
      });
  }, []);
  return isloading ? (
    <CircularIndeterminate />
  ) : isLogged ? (
    <PagesRoutes />
  ) : (
    <GuestRoute />
  );
};

export default Handleauthintication;
