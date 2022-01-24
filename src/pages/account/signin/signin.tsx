import Button from "components/atomic/button/Button";
import React, { useState } from "react";
import useInput from "hooks/useInput";
import Input from "components/atomic/input/Input";
import useApi from "hooks/useApi";
import { useDispatch } from "react-redux";
import login, { loginActions } from "store/login";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "./signIn.styles";

const isNotEmpty = (value: string) => value.trim() !== "";

function Signin() {
  const {
    value: userId,
    hasValue: userIdHasValue,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHander,
    reset: resetUserId,
  } = useInput(isNotEmpty);

  const {
    value: userPWD,
    hasValue: userPWDHasValue,
    hasError: userPWDHasError,
    valueChangeHandler: userPWDChangeHandler,
    inputBlurHandler: userPWDBlurHander,
    reset: resetUserPWD,
  } = useInput(isNotEmpty);

  let formValid = false;
  if (userIdHasValue && userPWDHasValue) {
    formValid = true;
  }

  const dispatch = useDispatch();
  const {isLoading, error, sendRequest: fetchSigninData} = useApi();
  let navigate = useNavigate();
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("제출");
    if (!formValid) {
      console.log("에러");
      return;
    }

    const apiData = {
      email: "",
      password: "",
      sid: "", //
    };
    const checkSignin = (signInData: object) => {
      console.log("loginData", signInData);
      dispatch(loginActions.login(true));
      navigate("/");

    }
    fetchSigninData(
      {
        method: "POST",
        url: "user/local/login",
        data: apiData,
      }, checkSignin
    );
    //login api

    resetUserId();
    resetUserPWD();
  }

  return (
    <SignInForm onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">이메일</label>
        <Input
          type="email"
          id="email"
          value={userId}
          placeholder="이메일을 입력해주세요."
          onBlur={userIdBlurHander}
          onChange={userIdChangeHandler}
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          id="password"
          value={userPWD}
          placeholder="비밀번호를 입력해주세요"
          onBlur={userPWDBlurHander}
          onChange={userPWDChangeHandler}
        />
        <Button disabled={!formValid} label="로그인" type="submit" />
      </div>
    </SignInForm>
  );
}
export default Signin;
