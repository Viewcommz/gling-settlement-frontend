import Icon from "components/atomic/icons/icon";
import NavButton from "components/atomic/button/NavButton";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { Fragment, useState } from "react";

import profile from "assets/images/profile.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HeaderContainer, HeaderContents, MidMenu, RightMenu, BizTitleBox, Profile, ProfileMenu } from "./NavBar.styles";
import DropDown, { UserDropDown } from "components/modules/dropdown/Dropdown";

const NavBar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
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
