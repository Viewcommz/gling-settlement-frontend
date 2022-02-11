import FilterBox from "components/modules/filterbox/FilterBox";
import MenuBar from "components/modules/menuBar/MenuBar";
import Button from "components/atomic/button/Button";
import Modal from "components/modules/modal/Modal";
import SectionLayout from "components/templates/SectionLayout";
import SettlementDailyService from "api/services/settlement/daily";
import useAsync from "hooks/useAsync";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchDailyDatas } from "./inquirySlice";
import { DailyInquiryProps } from "api/services/settlement/daily";
import { Dispatch } from "app/store";

let dummyData: DailyInquiryProps = {
    author_name: "",
    endDate: "20220228",
    name: "",
    selectedPlatform: [25, 21, 3, 4],
    series_name: "",
    startDate: "20201001",
};
const applyIdHandler = (idx: number) => {
    console.log("부모 컴포 실행됨", idx);
};

function SalesInquiry() {
    const dispatch: Dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDailyDatas(dummyData));
    }, [dispatch]);

    let { loading, data, error } = useAsync(SettlementDailyService.getDaily, [], dummyData);
    // if (loading) return <SectionLayout>"Loading..."</SectionLayout>;
    console.log("sales data", data);

    return (
        <SectionLayout>
            <h2>판매 조회</h2>
            {
                // ReactDOM.createPortal(<Modal />,document.getElementById('modal-root')||document.createElement('div'))
            }
            <Modal
                title="모달타이틀"
                message="모달메세지"
                onConfirm={() => {
                    console.log("클릭");
                }}
            />
            <MenuBar menus={["일별 판매 현황", "월 정산", "선인세", "기타 지급금"]} applyId={applyIdHandler} />
            <FilterBox />
            {/* {
          data.data.result.map((item: any) => <li>{`${item.id}, ${item.author_name}`}</li>)
        } */}
            {/* 테이블 */}
            {data && <Button label="모달버튼" />}
        </SectionLayout>
    );
}

export default SalesInquiry;
