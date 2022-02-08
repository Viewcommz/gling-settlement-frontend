import React from "react";
import styled from "styled-components";

function SelectBox() {
  return (<>
    <SelectBoxWrapper>
      <option value="default">전체</option>
      <option>옵션1</option>
      <option>옵션2</option>
    </SelectBoxWrapper>
  </>
  );
}

export default SelectBox;

const SelectBoxWrapper = styled.select`
  // -moz-appearance: none;
  // -webkit-appearance: none;
  // appearance: none;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  font-size: 14px;
  padding-left: 12px;
  outline: none;
  /* background: url('assets/images/') */

`;
