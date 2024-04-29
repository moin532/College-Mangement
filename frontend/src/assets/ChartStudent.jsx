import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  import { useSelector } from 'react-redux';
  
const ChartStudent = () => {

  const {user} = useSelector((state)=>state.student );
  
  const graph = user.TotalMarks
  

  const lineState = {
    labels: ["Initial Marks", "Current Marks"],
    datasets: [
      {
        label: "TOTAL MARKS",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0,graph],
      },
    ],
  };

  return (
    
    <Wrapper>
        
    <div>

    <h1 className='flex  justify-center font-bold text-5xl mt-7  underline' >Graphs</h1>
      <div className="graphs mt-7">

        <div className="lineChart">
          <Line data={lineState} />
        </div>
      </div>
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
    .lineChart {
  width: 80%;
  margin: auto;
  background-color: #d2f9aa;
}


@media screen and (max-width: 600px) {
 

  .graphs{
    margin-left: 4px;
        padding-top: 23px;
        width: 22vmax;
  }
  .lineChart {
    width: 50vh;
   height: 28vh;
}

  

}

`
export default ChartStudent;
