import styled from "styled-components";

const DailyContentAnalysisChart = () => {
    return (
        <StyledChart>일일 작품 분석 차트</StyledChart>
    )
}

const StyledChart = styled.div`
    width: 360px;
    height: 350px;
    border: 1px solid black;
`

export default DailyContentAnalysisChart;