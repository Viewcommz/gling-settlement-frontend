import styled from "styled-components";
import ApexCharts from 'react-apexcharts';

const SalesAnalysis = (props: SalesAnalysisProps) => {
    return (
        <StyledChart>
            판매 금액 분석
            <ApexCharts
                options={props.salesAnalysisData.options}
                series={props.salesAnalysisData.series}
                types="line"
                width={840}
                height={450}
            />
        </StyledChart>
    )
}

interface SalesAnalysisProps {
    salesAnalysisData: ChartOptions;
}

interface ChartOptions {
    series: Array<any>;
    options: object;
}

const StyledChart = styled.div`
    width: 895px;
    height: 500px;
    font-weight: 500;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
`

export default SalesAnalysis;