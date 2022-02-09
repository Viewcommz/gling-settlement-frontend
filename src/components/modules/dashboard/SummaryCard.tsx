const SummaryCard = (props: SummaryCardProps) => {
    console.log(props);

    return (
        <ul>
            {props.summaryData.map(s => (
                <li>
                    <div>{s.subtitle}</div>
                    <div>{s.amount}</div>
                    <div>{s.desc}</div>
                </li>

            ))}
        </ul>
    )
}

interface SummaryCardProps {
    summaryData: Array<any>
}

// interface Card {
//     subtitle: string;
//     amount: number;
//     desc: string;
//     rate: number;
// }

export default SummaryCard;