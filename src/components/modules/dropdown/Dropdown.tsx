import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// 수정해야함. auth props 받아오는 방식으로
import { signInActions } from "features/auth/signInSlice";
import styled, { css } from "styled-components";
import { authActions } from "features/auth/authSlice";

interface DropDownProp {
    id: number;
    menuName: string;
}
interface DropDownProps {
    menuItems: DropDownProp[];
    showMenu: boolean;
}

function DropDown({ menuItems, showMenu }: DropDownProps) {
    return (
        <Container showMenu={showMenu}>
            <div className="menu-wrap">
                {menuItems.map((item) => (
                    <NavLink to="/" key={item.id} className="menu-item">
                        {item.menuName}
                    </NavLink>
                ))}
            </div>
        </Container>
    );
}

export default DropDown;

export function UserDropDown({ showMenu }: { showMenu: boolean }) {
    return (
        <Container showMenu={showMenu}>
            <div className="menu-wrap">{ProfileMenuItems()}</div>
        </Container>
    );
}

function ProfileMenuItems() {
    const dispatch = useDispatch();
    function signout() {
        dispatch(signInActions.signOut());
        dispatch(authActions.clearUser());
    }
    return (
        <>
            <NavLink className="menu-item" to="/mypage">
                마이페이지
            </NavLink>
            <NavLink className="menu-item" to="/support">
                문의하기
            </NavLink>
            <div className="menu-item" onClick={signout}>
                로그아웃
            </div>
        </>
    );
}

const Container = styled.div<{ showMenu: boolean }>`
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
    position: absolute;
    top: 40px;
    width: 124px;
    border-radius: 10px;
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        box-shadow: 0px 10px 12px ${theme.colors.gray300};
    `};
    .menu-wrap {
        display: flex;
        flex-direction: column;
        .menu-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            padding: 8px 20px;
            font-size: 14px;
        }
    }
`;
