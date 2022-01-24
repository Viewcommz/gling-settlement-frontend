import useInput from "hooks/useInput";
import React from "react";
import styled, { css } from "styled-components";

interface StyledProps {
  type: string;
  id: string;
  value: string;
  size?: { width: string; height: string } & number;

}
interface InputProps extends StyledProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  reset?: () => void;
  placeholder?: string;
}

function Input({
  type,
  id,
  value,
  size,
  onBlur,
  onChange,
  reset,
  placeholder
}: InputProps) {
  return (
    <StyledInput
      type={type}
      id={id}
      value={value}
      size={size}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
}

export default Input;

const StyledInput = styled.input<StyledProps>`
  border: 1px solid red;

  ${({ size }) =>
    size
      ? css`
          width: ${size.width};
          height: ${size.height};
        `
      : css`
          width: 290px;
          height: 40px;
        `
  }
  border: 1px solid #DEE2E6;
`;
