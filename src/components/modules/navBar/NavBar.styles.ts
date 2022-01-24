import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 72px;
  position: relative;
  left: calc(50% - 50vw);
  /* border: 1px solid black; */
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
  a.selected{
    color:red;
  }
  h6 + h6 {
    margin-left: 30px;
  }
`;

export const RightMenu = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 40%; */
  font-size: 16px;
  cursor: pointer;
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