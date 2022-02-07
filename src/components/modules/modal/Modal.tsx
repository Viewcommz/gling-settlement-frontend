import styled from "styled-components";
interface ModalProps {
  title: string;
  message: string;
  onConfirm: React.MouseEvent;
}
// header / 
// x버튼 적용버튼 
//각 섹션에 children 추가할수있어야함
// 기본 모달 -> 의사 확인용 1개, 기타 기능 추가?
function Modal({title, message, onConfirm}: ModalProps) {
  return (
    <ModalContainer>
      모달창임.
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  border: 1px solid blue;
  width: 300px;
  height: 200px;
`