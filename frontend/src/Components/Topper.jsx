import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { TopperList } from "../action/StudentAction";
import ToppersList from "./ToppersList";

const Topper = () => {
    
  const dispath = useDispatch();
  const {   toppers  } = useSelector((state)=>state.student);

  useEffect(() => {

    dispath(TopperList())

  }, [dispath]);
  

  if(!toppers){
    return <div>loading......</div>
  }
  
  return (
    <div className=" bg-purple-300">
      {
          toppers && toppers.map((ele,ind)=>{
            return (
              <ToppersList elem={ele} key={ind}/>
              

            )
          })
        }
    </div>
  )
}

export default Topper
