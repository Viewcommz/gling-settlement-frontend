import { useState } from "react";
import styled, { css } from "styled-components";

function MenuBar({ menus, applyId }: { menus: string[], applyId:(idx:number) => void }) {
  const [clickedItemId, setClickedItemId] = useState(0);
  const clickHandler = (idx:number) => {
    console.log("idx",idx)
    setClickedItemId(idx);
    applyId(idx);
  }
  
  return (
    <MenuWrapper>
      {menus.map((m, i) => (
        <Container key={i} isClicked={i === clickedItemId ? true : false} onClick={()=>clickHandler(i)}>{m}</Container>
      ))}
    </MenuWrapper>
  );
}
export default MenuBar;

const MenuWrapper = styled.div`
  display: table;
  /* border-collapse: collapse; */
  background-color: ${({ theme }) => theme.colors.gray50};
`;
const Container = styled.div<{isClicked:boolean}>`
  display: table-cell;
  width: 300px;
  height: 40px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray300};
    border-bottom: 1px solid ${theme.colors.black};
    border-radius: 4px 4px 0 0;
    color: ${theme.colors.gray600};
  `}

  ${(props) => props.isClicked&&css`
    background-color: ${props.theme.colors.white};
    border: 1px solid black;
    border-bottom: hidden;
    color: ${props.theme.colors.black};
  `}
  /* box-shadow: 1px 0 0 0px black, 0px 1px 0 0 black, 0px 0 1px 0 black, inset 1px 0px black, inset 0px 1px black; */
`;
