import Title from "components/modules/dashboard/Title";
import SummaryCard from "components/modules/dashboard/SummaryCard";

const Publisher = (props: PublisherProps) => {
    const summaryCardProps = [
        { subtitle: "26일", amount: 15725983, desc: "전일 대비 -30%", rate: -30 },
        { subtitle: "25일", amount: 34211589, desc: "", rate: null },
        { subtitle: "당월 예상수입", amount: 441485118, desc: "전일 대비 -30%", rate: -30 },
        { subtitle: "전월 정산금 총계", amount: 251222454, desc: "소진 8,750,000원", rate: -8750000 },
    ]
    return (
        <div>
            <Title nickName={props.nickName} />
            <SummaryCard summaryData={summaryCardProps} />
        </div>
    )
}

interface PublisherProps {
    nickName: string;
}


export default Publisher;