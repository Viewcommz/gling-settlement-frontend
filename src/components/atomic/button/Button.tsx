import styled from "styled-components";

interface ButtonProps {
  text: string;
  outlined?: boolean;
  size?: string;
}

function Button({ text, outlined, size }: ButtonProps) {
  return <StyledButton>{text}</StyledButton>;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 32px;
  
  `;
export default Button;

/* border: ${{theme, outlined} => (outlined?theme.colors.black:'unset')};
border-radius: 40px;
background-color: ${props => props.theme.colors.blue200};
font-size: 14px; */