import React from 'react'
import DataTablee from './DataTable'

const FistYearStudent = ({data}) => {

   
   let firstYearStudents = data.filter(student => student.stdYear === "1st year");

  return (
    <div>
       <h1 className='flex  justify-center font-bold text-5xl mt-7  underline  mb-9' >First Year Student</h1>
       <DataTablee students = {firstYearStudents}/>

    </div>
  )
}

export default FistYearStudent
