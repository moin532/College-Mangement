import React from 'react'
import DataTablee from './DataTable';

const ThirdStudent = ({data}) => {

  let ThirdYearStudents = data.filter(student => student.stdYear === "3rd year");

  return (
    <div>
         <h1 className='flex  justify-center font-bold text-5xl mt-7 mb-9 underline' >Third Year Student</h1>
         <DataTablee students={ThirdYearStudents }/>
      
    </div>
  )
}

export default ThirdStudent
