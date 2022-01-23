import Button from "components/atomic/button/Button";
import { useState } from "react";


function Signin() {
  const [id, setId] = useState('');

  function idInputChangeHandler(e:any) {
    console.log("id value", e.target.value);
    setId(e.target.value);
  }

  return (<div>
    <label htmlFor='id'>아이디</label>
    <input 
      type='id' 
      id='id'
      value={id}
      onChange={idInputChangeHandler}
    />
    <label htmlFor='id'>비밀번호</label>
    <input type='password' id='password'/>
    <Button text="로그인"/>
  </div>)
}
export default Signin;
