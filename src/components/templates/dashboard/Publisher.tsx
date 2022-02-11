import styled from "styled-components";
import Title from "components/modules/dashboard/Title";
import SummaryCard from "components/modules/dashboard/SummaryCard";
import SalesAnalysis from "components/modules/dashboard/SalesAnalysis";
import Calendar from "components/modules/dashboard/Calendar";
import Notification from "components/modules/dashboard/Notification"

const Publisher = (props: PublisherProps) => {
    const summaryCardProps = [
        { subtitle: "26일", amount: 15725983, desc: "전일 대비 -30%", rate: -30 },
        { subtitle: "25일", amount: 34211589, desc: "", rate: null },
        { subtitle: "당월 예상수입", amount: 441485118, desc: "전일 대비 -30%", rate: -30 },
        { subtitle: "전월 정산금 총계", amount: 251222454, desc: "소진 8,750,000원", rate: -8750000 },
    ]
    const salesAnalysisProps = {
        series: [
        {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
            },
            stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y: any) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        },
    };
    const notificationProps = [
        { type: "공지사항", title: "업데이트 공지사항이 있습니다.", color: "red" },
        { type: "런칭, 프로모션", title: "리디북스 마크다운이 진행중입니다!", color: "green" },
        { type: "정산, 선인세", title: "이번 달 정산일은 12월 31일 입니다.", color: "blue" },
    ]
    return (
        <div>
            <Title nickName={props.nickName} />
            <SummaryCard summaryData={summaryCardProps} />
            <FlexDiv>
                <SalesAnalysis salesAnalysisData={salesAnalysisProps} />
                <FullWidthDiv>
                    <Calendar />
                    <Notification notificationData={notificationProps}/>
                </FullWidthDiv>
            </FlexDiv>
        </div>
    )
}

interface PublisherProps {
    nickName: string;
}

const FlexDiv = styled.div`
    display: flex;
`

const FullWidthDiv = styled.div`
    width: 280px;
`


export default Publisher;