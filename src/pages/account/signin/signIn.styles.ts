import styled, { css } from "styled-components";

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

`
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
`

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
    border: 1px solid ${({theme})=>theme.colors.gray300};
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
`

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

`