import React, { Fragment, useEffect } from "react";
import "./App.css";
import "./styles/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import NavBar from "components/modules/navBar/navBar";

import { Routes, Route, Outlet, BrowserRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useApi from "hooks/useApi";

import { loginActions } from "store/login";

function App() {
  // 로그인 여부 확인
  const dispatch = useDispatch();
  // const { sendRequest: fetchLoginData } = useApi();

  const apiData = {
    email: "yangmae@gmail.com",
    password: "yangmae123",
    sid: "HxW1Lab4AB", //HxW1Lab4AB
  };
  useEffect(() => {
    dispatch(loginActions.login(false));

    // const checkLogin = (loginData: object) => {
    //   console.log("nverbar loginData", loginData);
    //   dispatch(loginActions.login(true));
    // };
    // fetchLoginData(
    //   {
    //     method: "POST",
    //     url: "user/local/login",
    //     data: apiData,
    //   },
    //   checkLogin
    // );
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;
