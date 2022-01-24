import Icon from "components/atomic/icons/icon";
import styled from "styled-components";
import Button from "components/atomic/button/Button";

import { loginActions } from "store/login";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { Fragment, useEffect } from "react";
import useApi from "hooks/useApi";

import profile from "assets/images/profile.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import {
  HeaderContainer,
  HeaderContents,
  MidMenu,
  RightMenu,
  BizTitleBox,
} from "./NavBar.styles";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  const { isLoading, error, sendRequest: fetchLoginData } = useApi();

  const apiData = {
    email: "@gmail.com",
    password: "",
    sid: "", //
  };

  useEffect(() => {
    dispatch(loginActions.login(false));
    if(isLoggedIn) {
      console.log("nav 변경")
    }
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
    return () => {
      // cleanup
    };
  }, [isLoggedIn]);

  return (
    <div>
      <HeaderContainer>
        <HeaderContents>
          <CustomNav to="/">
            <div className="logo-wrap">
              <Icon icon="logo" size={28} />
              <BizTitleBox>정산관리</BizTitleBox>
            </div>
          </CustomNav>
          {isLoggedIn ? (
            <Fragment>
              <MidMenu>
                <h6>
                  <NavLink to="sub">대시보드</NavLink>
                </h6>
                <h6>정산관리</h6>
                <h6>포트폴리오 관리</h6>
                <h6>E-BOOK제작</h6>
                <h6>고객센터</h6>
              </MidMenu>
              <RightMenu>
                <div className="profile">
                  <img src={profile} alt="유저프로필" />
                </div>
                <h6>김강림</h6>
              </RightMenu>
            </Fragment>
          ) : (
            <Fragment>
              <MidMenu>
                <h6>
                  <CustomNav title="서비스 소개" to="/" />
                </h6>
                <h6>
                  <CustomNav title="요금 안내" to="pricing" />
                </h6>
                <h6>
                  <CustomNav title="이용가이드" to="guide" />
                </h6>
                <h6>
                  <CustomNav title="문의하기" to="consult" />
                </h6>
              </MidMenu>
              <RightMenu>
                <CustomNav to="/signin">
                  <Button label="로그인" outline />
                </CustomNav>
                <Button label="시작하기" />
              </RightMenu>
            </Fragment>
          )}
        </HeaderContents>
      </HeaderContainer>
      <Outlet />
    </div>
  );
};

export function CustomNav({
  title,
  to,
  children,
}: {
  title?: string;
  to: string;
  children?: React.ReactNode;
}) {
  const navStyle = {
    fontWeight: 600,
  };
  return (
    <NavLink to={to} style={({ isActive }) => (isActive ? navStyle : {})}>
      {children ? children : title}
    </NavLink>
  );
}
export default NavBar;
