import styled, { css } from "styled-components";

export interface StyledProps {
  outline?: boolean;
  size?: {width:string, height:string};
  rectangle?: boolean;
}
export interface ButtonProps extends StyledProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClickHandler?: () => void;
}

function Button({ label, type, disabled, outline, size, rectangle, onClickHandler }: ButtonProps) {
  return (
    <StyledButton 
      type={type}
      outline={outline} 
      size={size}
      disabled={disabled}
      rectangle={rectangle}
      onClick={onClickHandler}
    >
      {label}
    </StyledButton>);
}

export const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  border-radius: ${({ rectangle }) => rectangle?'0px':'40px'};
  ${({ outline, theme }) => 
      outline?
      css`
        border:1px solid ${theme.colors.black};
        background-color: ${theme.colors.white};`:
      css`
        background-color: ${({ theme }) => theme.colors.blue200};`    
  };
  font-size: 14px;
  font-weight: 500;
  width: 100px;
  height: 32px;
  ${({ size }) => size&&css`
    width: ${size.width};
    height: ${size.height};
  `}
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
`;

export default Button;
