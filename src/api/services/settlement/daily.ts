import api from "api/api";

export interface DailyInquiryProps {
    author_name: string;
    endDate: string;
    name: string;
    selectedPlatform: number[];
    series_name: string;
    startDate: string;
}
function createDaily() {}
function getDaily(props: DailyInquiryProps) {
    let res = api.post("settlement/salesInquiry/daily/publisher/select", props);
    return res;
}

function updateDaily() {}

const SettlementDailyService = {
    createDaily,
    getDaily,
    updateDaily,
};

export default SettlementDailyService;
