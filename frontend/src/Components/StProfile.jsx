import React from 'react'
import {Button} from "../Button"
import { useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
import styled from 'styled-components';

const StProfile = () => {

  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.student );

  if(!user){
    return <div>...loading</div>
  }

  const Logout =()=>{
    Cookies.remove("username");
    toast.success('Logout Successfully')
    navigate('/')
    
  }
  return (
    <div>
      <Wrapper>
        
     <div className=' h-full' id="main">
        <h1 className='flex  justify-center font-bold text-5xl mt-7  underline' >My Profile</h1>

        <div className=' ml-44 grid grid-cols-2 gap-4 mt-12 text-4xl p-14 sm:col-span-1' id="content">

          <div className=' '>
          <h3 className=' font-serif font-semibold  mb-7  text-lime-600 '>Student Name : <span className=' text-yellow-400 font-semibold  text-5xl capitalize'>{user.name}</span></h3>
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '> UUCMS-No     : <span className='  text-violet-700  font-semibold '>{user.uucmsNo}</span></h3>
      
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '>Phone_Number: <span className='  text-violet-700 font-semibold '>{user.phoneNumber}</span></h3>
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '> Email   : <span className='  text-violet-700 font-semibold  '>{user.email}</span></h3>
      
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '>Std Year: <span className='  text-violet-700 font-semibold '>{user.stdYear}</span></h3>
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '> Domain : <span className='  text-violet-700 font-semibold  '>BCA</span></h3>
         
         <Button  className=' mt-11' onClick={Logout}>Log Out</Button>
          </div>
      
          <div className=' '>        
         
         <img className='img  -mt-64 ' src="./images/grd.png" alt=""  id="img" />
        
          </div>
          {/* margin: -63px 0px 0px -94px; */}
        </div>
        {/* 
         */}
     </div>
    </Wrapper>
    </div>
  )
}



const Wrapper = styled.section`


@media screen and (max-width: 600px) {
img#img {
  margin-left: 58px;
  margin-top: 28px;
  width: 184px;
}

div#content {
  margin-left: -9px;
  grid-column: none;
  grid: none;
  /* width: 25pc; */
}
}
  
`

export default StProfile
