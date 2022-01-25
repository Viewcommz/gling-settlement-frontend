import Button from "components/atomic/button/Button";
import React, { useState } from "react";
import useInput from "hooks/useInput";
import Input from "components/atomic/input/Input";
import useApi from "hooks/useApi";
import { useDispatch } from "react-redux";
import { loginActions } from "store/login";
import { useNavigate } from "react-router-dom";
import {
  InputBox,
  SignFormContainer,
  SignInForm,
  SnsSignin,
} from "./signIn.styles";

import GoogleLogo from "assets/images/sns-logo/btn_google_signin.jpg";
import KaKaoLogo from "assets/images/sns-logo/btn_kakao_signin.jpg";
import NaverLogo from "assets/images/sns-logo/btn_naver_signin.jpg";
import { userActions } from "store/user";

const isNotEmpty = (value: string) => value.trim() !== "";

function Signin() {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest: fetchSigninData } = useApi();
  let navigate = useNavigate();

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

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formValid) {
      return;
    }

    const apiData = {
      email: userId,
      password: userPWD,
      sid: "HxW1Lab4AB",
    };

    const checkSignin = (signInData: any) => {
      dispatch(loginActions.login(true));
      dispatch(userActions.setUserInfo(signInData.data.user));
      navigate("/");
    };

    fetchSigninData(
      {
        method: "POST",
        url: "user/local/login",
        data: apiData,
      },
      checkSignin
    );

    resetUserId();
    resetUserPWD();
  }

  return (
    <SignFormContainer>
      <h2 className="title">로그인</h2>
      <SignInForm onSubmit={submitHandler}>
        <SnsSigninForm snsName={["구글", "google"]} />
        <SnsSigninForm snsName={["네이버", "naver"]} />
        <SnsSigninForm snsName={["카카오", "kakao"]} />
        <InputBox>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            value={userId}
            placeholder="이메일을 입력해주세요."
            onBlur={userIdBlurHander}
            onChange={userIdChangeHandler}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            value={userPWD}
            placeholder="비밀번호를 입력해주세요"
            onBlur={userPWDBlurHander}
            onChange={userPWDChangeHandler}
          />
        </InputBox>
        <Button disabled={!formValid} label="로그인" type="submit" rectangle />
      </SignInForm>
    </SignFormContainer>
  );
}

function SnsSigninForm({ snsName }: { snsName: string[] }) {
  let [kor, eng] = snsName;
  let snsLogo;
  if (eng === "google") {
    snsLogo = GoogleLogo;
  } else if (eng === "kakao") {
    snsLogo = KaKaoLogo;
  } else snsLogo = NaverLogo;

  return (
    <SnsSignin className={eng}>
      <img src={snsLogo} />
      <div className="login-text">{kor}로 로그인</div>
    </SnsSignin>
  );
}
export default Signin;
