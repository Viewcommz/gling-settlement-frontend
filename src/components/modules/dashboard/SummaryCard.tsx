import styled from "styled-components";

const SummaryCard = (props: SummaryCardProps) => {
    console.log(props);

    return (
        <StyledUl>
            {props.summaryData.map(s => (
                <StyledLi>
                    <StyledSubtitle>{s.subtitle}</StyledSubtitle>
                    <div>
                        <div>{s.amount}</div>
                        <div>{s.desc}</div>
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
    subtitle: string;
    amount: number;
    desc: string;
    rate: number | null;
}

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const StyledLi = styled.li`
    display: flex;
    width: 280px;
    height: 100px;
    padding: 30px;
    border: 1px solid #DEE2E6;
    border-radius: 8px;
`

const StyledSubtitle = styled.div`
    width: 40%;
`

export default SummaryCard;