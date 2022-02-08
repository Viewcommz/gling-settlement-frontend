import api from "api/api";

interface DailyInquiryProps {
    author_name: string
    endDate: string
    name: string
    selectedPlatform: number[]
    series_name: string
    startDate: string
}
function createDaily(){}
async function getDaily(props:DailyInquiryProps) {
    let res = await api.post('settlement/salesInquiry/daily/publisher/select',props);
    return res;
}

function updateDaily(){}


const SettlementDailyService = {
    createDaily,
    getDaily,
    updateDaily,
}

export default SettlementDailyService;