import React from "react";
import styled from "styled-components";

const ToppersList = ({ elem }) => {
  return (
    <Wrapper>
      <div className=" h-full" id="main">
        <h1 className=" ">Toppers</h1>{" "}
        <div className=" bg-green-400  font-mono h-28 hover:bg-sky-400">

          <div className=" w-36  h-12 relative ">
            <img src="./images/awd.png" alt="" />
          </div>
          <div className="flex  justify-between font-bold text-3xl  " id="content">
            <h1> CONGRASULATIONS....</h1>

            {/* name */}
            <h1 className=" text-white">  {elem.name}</h1>
            {/* Marks */}
            <h1 className=" text-black text-4xl"> {elem.TotalMarks}</h1>
            {/* Years */}
            <h1>{elem.stdYear}</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
@media only screen and (max-width: 600px) {
  div#content {
    font-size: 10px;
}

img, video {
    margin-left: -1px;
    width: 30px;
}

  }
`;

export default ToppersList;
