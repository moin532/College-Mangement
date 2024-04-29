import React, { useEffect } from "react";
import styled from "styled-components";

const TableCard = ({ user }) => {
  if (!user) {
    return <div>Loading...Image Cannot Fetch </div>;
  }

 
  const data = user.subjects;

  
  if (!data) {
    return <div>Loading...Image Cannot Fetch </div>;
  }
  //   return console.log(elem.subjects)
  // })

  // const entries = Object.entries(user);

  return (
    <Wrapper>
      <div className="">
        <table>
          <tbody>
            <tr id="header">
              <th>Subject Name</th>
              <th>Marks</th>
              <th>Sem</th>
            </tr>

            {data &&
              data.map((elem) => {
                return (
                  <>
                    <tr>
                      <td>{ elem ? elem.subjectName : ""}</td>
                      <td>{ elem ? elem.marks : ""}</td>
                      <td>{ }</td>
                    </tr>
                  </>
                );
              })}

          </tbody>
        </table>

      </div>
      
      <div className=" mt-28  w-2/2 flex justify-center text-4xl">
        <h1>Total Marks : {  user.TotalMarks}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  table {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 2%);
    border-collapse: collapse;
    width: 1000px;
    height: 400px;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }

  tr {
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  th,
  td {
    font-size: 25px;
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  #header {
    background-color: #16a085;
    color: #fff;
  }

  h1 {
    font-weight: 600;
    text-align: center;
    background-color: #16a085;
    color: #fff;
    padding: 10px 0px;
  }

  tr:hover {
    background-color: #f5f5f5;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 768px) {
    table {
      width: 90%;
    }
  }
`;
export default TableCard;
