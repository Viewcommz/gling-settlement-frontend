import API from "api/instance";

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
    return API.post("settlement/salesInquiry/daily/publisher/select", props);
}

function updateDaily() {}

const SettlementDailyService = {
    createDaily,
    getDaily,
    updateDaily,
};

export default SettlementDailyService;
