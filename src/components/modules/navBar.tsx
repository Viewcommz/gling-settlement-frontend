import Icon from "components/atomic/icons/icon";
import styled from 'styled-components';
import Button from 'components/atomic/button/Button';

import { loginActions } from "store/login";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { useEffect } from "react";
import axios from "axios";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:RootState) => state.login.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  
  const apiData = {
    email: "", 
    password: "",
    sid: "" //HxW1Lab4AB
  }
  const fetchData = async() => {
    const res = await axios({
      method:"POST",
      url: '/api/user/local/login',
      data: apiData,
      withCredentials: true,
    })
    console.log('res', res);
    if (res.data.status === "success") {
      return res.data.data
    } else {
      return null;
    }
  }
  useEffect(() => {
    dispatch(loginActions.login());
    fetchData()
    return () => {
      // cleanup
    }
  }, []);

  return (
    <div>
      <HeaderContainer>
        <HeaderContents>
          <Icon icon="logo" size={28} />
          <BizTitleBox>정산관리</BizTitleBox>
          <MidMenu>
            <h6>대시보드</h6>
            <h6>정산관리</h6>
            <h6>포트폴리오 관리</h6>
            <h6>E-BOOK제작</h6>
            <h6>고객센터</h6>
          </MidMenu>
          <RightMenu>
            <Button  text="로그인" />
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
  background-color: #fff;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`

const MidMenu = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  font-size: 16px;
  cursor: pointer;
`

const RightMenu = styled.div`
   border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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
