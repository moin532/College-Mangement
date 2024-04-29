import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardDetails from "./CardDetails";
import NoteModal from "./NoteModal";
import { useSelector, useDispatch } from "react-redux";
import { AllNotes } from "../../action/StudentAction";
import { TypeAnimation } from 'react-type-animation';

const Card = () => {

  const dispatch = useDispatch();

  const { allNts } = useSelector((state)=>state.noteMotivate);
  const {isAuthenticated} = useSelector((state)=>state.student );
  
  useEffect(()=>{
    
       dispatch(AllNotes());
  },[dispatch])

  if(!allNts) {
    return  <div>..Not Found data</div>
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const product = allNts.map((item, index) => (
    <CardDetails
      name={item.name}
      description={item.note}
      key={index}
    />
  ));

  return (
    <div className="App">
      <h1 className="text-8xl text-center mt-36 -mb-24 border-l-4  font-sans border-teal-400 sm: pt-9 font-normal">
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Motivation',
    1000,
    'Motivation Qu',
    1000,
    'Motivation Quites',
    1000,
   
  ]}
  
  cursor={true}
  speed={50}
  // style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
      </h1>
      
      <div className="modal flex justify-end  h-20 mr-14 sm: mt-8  ">

       {
         isAuthenticated ?     <NoteModal  /> : ''
         
       }

         
             
           

          
      </div>

      <div className="ml-10  mr-10    border sm: mt-10">
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Card;
