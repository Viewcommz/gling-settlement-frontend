import { useEffect } from 'react';
import FilterBox from "components/modules/filterbox/FilterBox";
import MenuBar from "components/modules/menuBar/MenuBar";
import { getAll } from 'api/services/Settlement';

function SalesInquiry() {
  useEffect(()=>{
    // 화면 렌더링 시 데이터 가져와야 + 필터 바뀔 떄마다 데이터 요청?
    // api 요청
    // api.getDailyData() api.getMonthlyData(options) 이런식으로 자동으로 뜰 수 있게하면..?
    console.log("마운트")
    console.log("데이터 : ",getAll());
  },[]);


  const applyIdHandler = (idx:number) => {
    console.log("부모 컴포 실행됨",idx);
  }
  return(<div>
    <h2>판매 조회</h2>
    <MenuBar menus={['일별 판매 현황','월 정산','선인세','기타 지급금']} applyId={applyIdHandler}/>
    <FilterBox />
    {/* 테이블 */}
  </div>)
}


export default SalesInquiry;