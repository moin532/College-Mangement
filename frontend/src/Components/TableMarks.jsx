import React,{useEffect} from 'react'
import TableCard from './TableCard'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import {  toast } from 'react-toastify';

const TableMarks = () => {

  const navigate = useNavigate()
  const {user, isAuthenticated} = useSelector((state)=>state.student );

  if (!user) {
    return <div>Loading...Image Cannot Fetch </div>;
  }
  
  // if(!isAuthenticated){
  //   toast.error("pls login to acces")
  //   navigate('/')
  // }
  
  useEffect(() => {
    if(!isAuthenticated){
      toast.error("pls login to acces")
      navigate('/')
    }
    
    if(user.role === 'admin'){
      navigate('/admin/marks')
    }
    
  }, [isAuthenticated , user]);

 

  return (
    <div>

        <h1 className=' justify-center flex text-5xl  mt-8 underline font-bold mb-9 h-full'>My Marks</h1>
    {/* {
      Object.entries(user).map((elem)=>{ */}
       <TableCard user={user}/>

      {/* }) */}

    {/* } */}
      
    </div>
  )
}

export default TableMarks
