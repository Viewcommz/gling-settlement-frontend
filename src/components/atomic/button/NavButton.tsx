import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import type { StyledProps, ButtonProps } from './Button';
import { StyledButton } from './Button';

interface NavButtonProps extends ButtonProps {
  to: string;
}
function NavButton(props:NavButtonProps){
  let navigate = useNavigate();
  function goPage(event:React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate(`${props.to}`);
  }
  return (
    <NavStyledButton
      {...props}
      onClick={goPage}
    >
      {props.label}
    </NavStyledButton>
  )
}

const NavStyledButton = styled(StyledButton)<StyledProps>`
  & + & {
    margin-left: 8px;
  }
`
export default NavButton;