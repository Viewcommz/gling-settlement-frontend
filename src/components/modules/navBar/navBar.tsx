import NavButton from "components/atomic/button/NavButton";
import Icon from "components/atomic/icons/icon";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store";

import { Fragment, useState } from "react";

import profile from "assets/images/profile.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { UserDropDown } from "components/modules/dropdown/Dropdown";

const NavBar = () => {
    const isLoggedIn = useSelector((state: RootState) => state.signIn.isSignIn);
    const userData = useSelector((state: RootState) => state.user);
    const [showMenu, setShowMenu] = useState(false);

    function profileClickHandler() {
        setShowMenu((state) => !state);
    }

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
                                <li>
                                    <CustomNav title="대시보드" to="dashboard" />
                                </li>
                                <li>
                                    <CustomNav title="정산관리" to="settlement/daily" />
                                </li>
                                <li>
                                    <CustomNav title="포트폴리오" to="portfolio" />
                                </li>
                                <li>
                                    <CustomNav title="E-BOOK제작" to="ebook" />
                                </li>
                                <li>
                                    <CustomNav title="고객센터" to="support" />
                                </li>
                            </MidMenu>
                            <ProfileMenu onClick={profileClickHandler}>
                                <Profile>
                                    <div className="profile">
                                        <img src={profile} alt="유저프로필" />
                                    </div>
                                    <li>{userData.user_nickname}</li>
                                </Profile>
                                <UserDropDown showMenu={showMenu} />
                            </ProfileMenu>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <MidMenu>
                                <li>
                                    <CustomNav title="서비스 소개" to="/" />
                                </li>
                                <li>
                                    <CustomNav title="요금 안내" to="pricing" />
                                </li>
                                <li>
                                    <CustomNav title="이용가이드" to="guide" />
                                </li>
                                <li>
                                    <CustomNav title="문의하기" to="consult" />
                                </li>
                            </MidMenu>
                            <RightMenu>
                                <NavButton label="로그인" outline to="/signin" />
                                <NavButton label="시작하기" to="/signup" />
                            </RightMenu>
                        </Fragment>
                    )}
                </HeaderContents>
            </HeaderContainer>
            <Outlet />
        </div>
    );
};

export function CustomNav({ title, to, children }: { title?: string; to: string; children?: React.ReactNode }) {
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

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 72px;
    position: relative;
    left: calc(50% - 50vw);
    border-bottom: 1px solid #ddd;
`;

export const HeaderContents = styled.div`
    font-family: "Spoqa Han Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .logo-wrap {
        /* border: 1px solid salmon; */
        display: flex;
        align-items: center;
    }
`;

export const MidMenu = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 40%; */
    font-size: 16px;
    cursor: pointer;
    /* 30px */
    a.selected {
        color: red;
    }
    li + li {
        margin-left: 30px;
    }
`;

export const RightMenu = styled.div`
    /* border: 1px solid blue; */
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ProfileMenu = styled(RightMenu)`
    flex-direction: column;
    position: relative;
    align-items: center;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
`;

export const BizTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 18px;
    padding: 2px;
    border-radius: 16px;
    transform: scale(0.8);
    background-color: #495057;
    color: #fff;
    font-size: 10px;
`;
