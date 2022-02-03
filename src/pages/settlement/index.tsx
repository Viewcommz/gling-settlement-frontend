import { useEffect } from 'react';
import FilterBox from "components/modules/filterbox/FilterBox";
import MenuBar from "components/modules/menuBar/MenuBar";

function SalesInquiry() {
  useEffect(()=>{
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