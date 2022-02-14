import styled from "styled-components";

const SummaryCard = (props: SummaryCardProps) => {
    return (
        <StyledUl>
            {props.summaryData.map(s => (
                <StyledLi key={props.summaryData.indexOf(s)}>
                    <StyledType color={props.summaryData.indexOf(s) == 0 ? `#00BCD4` : `#868E96`}>
                        {s.type}
                    </StyledType>
                    <div>
                        <StyledAmount>{s.amount}</StyledAmount>
                        <StyledDesc color={s.rate >= 0 ? `#FF001A` : `#0077FF`}>{s.desc}</StyledDesc>
                    </div>
                </StyledLi>

            ))}
        </StyledUl>
    )
}

interface SummaryCardProps {
    summaryData: Array<Card>
}

interface Card {
    type: string;
    amount: string;
    desc: string;
    rate: number;
}

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    li {
        &:first-child {
            border: 2px solid #00BCD4;
        }
    }
`

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    width: 280px;
    height: 100px;
    border: 1px solid #DEE2E6;
    border-radius: 8px;
`

const StyledType = styled.div`
    display: flex;
    padding-left: 21px;
    margin-right: 10px;
    width: 110px;
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.color};
    line-height: 20.03px;
`

const StyledAmount = styled.div`
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
`

const StyledDesc = styled.div`
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    color: ${(props) => props.color};
`

export default SummaryCard;