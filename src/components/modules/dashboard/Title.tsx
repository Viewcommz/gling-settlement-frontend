import styled from "styled-components";
import moment from "moment";

function Title(props: TitleProps) {
    const days = ["일", "월", "화", "수", "목", "금", "토"]
    const yesterday = moment().subtract(1, "days")
    const dateFormat = yesterday.format("YYYY년 MM월 DD일");
    const day = days[Number(yesterday.format("e"))];
    return (
        <StyledTitle>
            <div>출판사 {props.nickName}의</div>
            <div>{dateFormat} {day}요일 매출현황입니다</div>
        </StyledTitle>
    )
}

interface TitleProps {
    nickName: string;
}

const StyledTitle = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
`

export default Title;

