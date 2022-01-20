import Icon from "components/atomic/icons/icon";
import styled from 'styled-components';
import Button from 'components/atomic/button/Button';

import { loginActions } from "store/login";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { useEffect } from "react";
import useApi from "hooks/useApi";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:RootState) => state.login.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  
  const { isLoading, error, sendReqeust:fetchLoginData } = useApi();


  const apiData = {
    email: "yangmae@gmail.com", 
    password: "yangmae123",
    sid: "HxW1Lab4AB" //HxW1Lab4AB
  }

  useEffect(() => {
    const checkLogin = (loginData:object) => {
      console.log("nverbar loginData", loginData);
      dispatch(loginActions.login(false));
    }
    fetchLoginData(
      {
      method: "POST",
      url: 'user/local/login',
      data: apiData,
      },
      checkLogin
    );
    return () => {
      // cleanup
    }
  }, []);

  return (
    <div>
      <HeaderContainer>
        <HeaderContents>
          <div className="logo-wrap">
            <Icon icon="logo" size={28} />
            <BizTitleBox>정산관리</BizTitleBox>
          </div>
          <MidMenu>
          <h6>서비스 소개</h6>
            <h6>요금 안내</h6>
            <h6>이용가이드</h6>
            <h6>문의하기</h6>
          </MidMenu>
          <RightMenu>
            <Button text="로그인"/>
            <Button text="시작하기" />
          </RightMenu>
        </HeaderContents>
      </HeaderContainer>
    </div>
  );
};




const HeaderContainer = styled.div`
  width: 100vw;
  height: 72px;
  position: relative;
  left: calc(50% - 50vw);
  border: 1px solid black;
`

const HeaderContents = styled.div`
  font-family: "Spoqa Han Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  .logo-wrap {
    border: 1px solid salmon;
    display: flex;
    align-items: center;
  }
`

const MidMenu = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 40%; */
  font-size: 16px;
  cursor: pointer;
  /* 30px */
  h6 + h6 {
    margin-left: 30px;
  }
`

const RightMenu = styled.div`
   border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 40%; */
  font-size: 16px;
  cursor: pointer;
`

const BizTitleBox = styled.div`
  width: 54px;
  height: 18px;
  padding: 2px;
  border-radius: 16px;
  transform: scale(0.8);
  background-color: #495057;
  color: #fff;
  font-size: 10px;
  text-align: center;
`
export default NavBar;
