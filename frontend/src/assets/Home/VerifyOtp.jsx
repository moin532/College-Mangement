import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import  {useDispatch, useSelector} from "react-redux"
import { verifyOtpe ,clearErrors} from '../../action/StudentAction';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const VerifyOtp = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const {loading , error,  isValidate} = useSelector((state)=>state.student );
  const [otp , setOtp] = useState('');
  const  email= JSON.parse( localStorage.getItem('email') );
 
 
console.log(isValidate);

  const submit =(e)=>{
    e.preventDefault();
    dispatch(verifyOtpe(email, otp))
    
  }


useEffect(() => {
  if(error){
    toast.error(error , "error")
    dispatch(clearErrors());
  }

  if (isValidate) {
    navigate('/');
  }

}, [dispatch,error,isValidate,navigate]);
  return (
    <Wrapper>
        <div className="container">
          <p>OTP has been sent to Your Email</p>
      <header>
        <i className="bx bxs-check-shield">MM</i>
      </header>
      <h4>Enter 4 Digit OTP Code</h4>
      <form onSubmit={submit}>
        <div class="input-field">
          <input type="Number"  value={otp} maxLength="4" onChange={e=>setOtp(e.target.value)} />
      
        </div>
        <input className='btn' type="submit" defaultValue="otp"  />
      </form>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    /* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4070f4;
}
:where(.container, form, .input-field, header) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  background: #fff;
  padding: 30px 65px;
  border-radius: 12px;
  row-gap: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.container header {
  height: 65px;
  width: 65px;
  background: #4070f4;
  color: #fff;
  font-size: 2.5rem;
  border-radius: 50%;
}
.container h4 {
  font-size: 1.25rem;
  color: #333;
  font-weight: 500;
}
form .input-field {
  flex-direction: row;
  column-gap: 10px;
}
.input-field input {
  height: 45px;
  width: 197px;
  border-radius: 6px;
  outline: none;
  font-size: 3.125rem;
  text-align: center;
  border: 1px solid ;
}
.input-field input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
.input-field input::-webkit-inner-spin-button,
.input-field input::-webkit-outer-spin-button {
  display: none;
}

.btn{
  margin-top: 25px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 9px 0;
  cursor: pointer;
  border-radius: 6px;
  background: #6e93f7;
  transition: all 0.2s ease;
}
form button.active {
  background: #4070f4;
 
}
form button:hover {
  background: #0e4bf1;
}

`
export default VerifyOtp
