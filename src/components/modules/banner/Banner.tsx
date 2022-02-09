import styled from "styled-components";
import SimpleSlider from "../slider/SimpleSlider";

function Banner() {
  return <BannerContainer>
      랜딩 페이지 배너
    <SimpleSlider/>
  </BannerContainer>;
}

export const BannerContainer = styled.div`
  width: 100vw;
  height: 800px;
  background-color: ${({theme}) => theme.colors.blue500};
`

export default Banner;
