import Button from "components/atomic/button/Button";
import React, { useEffect, useState } from "react";
import useInput from "hooks/useInput";
import Input from "components/atomic/input/Input";
import useApi from "hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { authActions, getAuth } from "./authSlice";
import { useNavigate } from "react-router-dom";

import GoogleLogo from "assets/images/sns-logo/btn_google_signin.jpg";
import KaKaoLogo from "assets/images/sns-logo/btn_kakao_signin.jpg";
import NaverLogo from "assets/images/sns-logo/btn_naver_signin.jpg";
import styled, { css } from "styled-components";
import { Dispatch } from "app/store";
import { RootState } from "app/store";
import { signInActions } from "./signInSlice";

const isNotEmpty = (value: string) => value.trim() !== "";

function Signin() {
    const { data, loading, error } = useSelector((state: RootState) => state.auth.authValue);
    const dispatch: Dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("에러변함", error);
    }, [error]);
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

    async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formValid) return;

        const apiData = {
            email: userId,
            password: userPWD,
            sid: "HxW1Lab4AB",
        };

        try {
            const { status, data, message } = await dispatch(getAuth(apiData)).unwrap();
            if (status === "success") {
                navigate("/");
            } else {
                alert("로그인 정보를 확인해주세요.");
            }
        } catch (err) {
            console.log("컴포넌트 에러", err);
        }
        // dispatch(getAuth(apiData))
        //     .unwrap()
        //     .then((response) => {
        //         if (response.status === "success") {
        //             navigate("/");
        //         } else {
        //             alert("로그인 정보를 확인해주세요.");
        //         }
        //     });

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
                        type="text"
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
            <img src={snsLogo} alt={eng + "logo"} />
            <div className="login-text">{kor}로 로그인</div>
        </SnsSignin>
    );
}
export default Signin;

export const SignFormContainer = styled.div`
    width: 600px;
    height: auto;
    margin: 0 auto;
    padding-top: 60px;
    .title {
        font-weight: 600;
        text-align: center;
        margin-bottom: 80px;
    }
`;
export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 20px auto;

    button {
        width: 100%;
        margin-top: 24px;
        height: 48px;
    }
`;

export const SnsSignin = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        width: 35px;
        height: 35px;
    }
    &.google {
        border: 1px solid ${({ theme }) => theme.colors.gray300};
    }
    &.kakao {
        background-color: #ffe200;
        margin-bottom: 50px;
    }
    &.naver {
        background-color: #00c825;
    }
    & + & {
        margin-top: 15px;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        margin-top: 10px;
        width: 100%;
    }
    & + & {
        margin-top: 24px;
    }
`;
