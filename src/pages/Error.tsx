import Button from "components/atomic/button/Button";
interface IErrorCode {
  errorCode: string
  errorTitle:string
  errorText :string
}
function Error({ errorCode="앗!", errorTitle="알 수 없는 에러", errorText="알 수 없는 에러가 발생했습니다.\n잠시 후 다시 시도해주세요 :)" }: Partial<IErrorCode>) {
  return (
    <div>
      { errorCode }
      { errorTitle }
      { errorText }
      <Button label="뒤로가기"/>
      <Button label="홈으로"/>
    </div>
  );
}

export default Error;
