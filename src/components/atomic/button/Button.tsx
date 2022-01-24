import styled, { css } from "styled-components";

interface StyledProps {
  outline?: boolean;
  size?: string;
}
interface ButtonProps extends StyledProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClickHandler?: () => void;
}

function Button({ label, type, disabled, outline, size, onClickHandler }: ButtonProps) {
  return (
    <StyledButton 
      type={type}
      outline={outline} 
      size={size}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {label}
    </StyledButton>);
}

const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: unset;
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
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
`;
export default Button;
