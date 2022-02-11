import styled from "styled-components";

const LaunchingContentChart = () => {
    return (
        <StyledChart>이달의 런칭 작품 분석 차트</StyledChart>
    )
}

const StyledChart = styled.div`
    width: 360px;
    height: 350px;
    border: 1px solid black;
`

export default LaunchingContentChart;