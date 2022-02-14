import styled from "styled-components";

import {
    Title, SummaryCard, SalesAnalysis, Calendar, Notification, SoaringSalesChart, 
    SoaringSalesTable, LaunchingContentTable, LaunchingContentChart, DailyContentAnalysisChart,
    DailyContentAnalysisTable, DailyPlatformAnalysis, EachPlatformDailyRank, EachPlatformSettlement
} from "components/modules/dashboard";

const Publisher = (props: PublisherProps) => {
    const summaryCardProps = [
        { type: "26일", amount: "15,725,983원", desc: "전일 대비 -30%", rate: -30 },
        { type: "25일", amount: "34,211,589원", desc: "", rate: 0 },
        { type: "당월 예상수입", amount: "441,485,118원", desc: "저번달 대비 +46%", rate: 46 },
        { type: "전월 정산금 총계", amount: "251,222,454원", desc: "소진 8,750,000원", rate: -8750000 },
    ]
    const salesAnalysisProps = {
        series: [
            {
                name: '이번주',
                type: 'column',
                data: [22222222, 33333333, 44444444, 55555555, 66666666, 77777777, 88888888]
            }, 
            {
                name: '지난주',
                type: 'line',
                data: [11111111, 22222222, 33333333, 44444444, 55555555, 66666666, 77777777]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
                foreColor: "#868E96"
            },
            colors: ["#00BCD4", "#FF3E36"],
            stroke: {
                width: [0, 4, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '38%',
                    borderRadius: 25,
                    colors: {
                        ranges: [
                            { from: 0, to: 6, color: "#E0F7FA"},
                            { from: 7, to: 8, color: "#00BCD4"}
                        ],
                        // backgroundBarColors: ["#E0F7FA", "#00BCD4"],
                    }
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
            labels: ['10/21', '10/22', '10/23',
                '10/24', '10/25', '10/26', '10/27'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'string'
            },
            yaxis: {
                title: {
                    text: '',
                },
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y: any) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,") + " 원";
                        }
                        return y;

                    }
                }
            }
        },
    };
    const notificationProps = [
        { type: "공지사항", title: "업데이트 공지사항이 있습니다.", color: "#FF3E36" },
        { type: "런칭, 프로모션", title: "리디북스 마크다운이 진행중입니다!", color: "#00D422" },
        { type: "정산, 선인세", title: "이번 달 정산일은 12월 31일 입니다.", color: "#0077FF" },
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
            <FlexDiv>
                <SoaringSalesChart />
                <SoaringSalesTable />
            </FlexDiv>
            <FlexDiv>
                <LaunchingContentChart />
                <LaunchingContentTable />
            </FlexDiv>
            <FlexDiv>
                <DailyContentAnalysisChart />
                <DailyContentAnalysisTable />
            </FlexDiv>
            <DailyPlatformAnalysis />
            <EachPlatformDailyRank />
            <EachPlatformSettlement />
        </div>
    )
}

interface PublisherProps {
    nickName: string;
}

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const FullWidthDiv = styled.div`
    width: 280px;
`


export default Publisher;