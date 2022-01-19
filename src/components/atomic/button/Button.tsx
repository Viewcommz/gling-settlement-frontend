import styled from 'styled-components';

const Button:React.FC<{text:string}> = (props) => {
  return (
    <ButtonContaienr>
      { props.text }
    </ButtonContaienr>
  )
}

const ButtonContaienr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export default Button;