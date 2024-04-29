import React from 'react'
import DataTablee from './DataTable';

const MidSecStd = ({data}) => {

  let secYearStudents = data.filter(student => student.stdYear === "2");
  return (
    <div>
       <h1 className='flex  justify-center font-bold text-5xl mt-7  mb-9 underline' >Second Year Students</h1>
       <DataTablee students = {secYearStudents}/>

    </div>
  )
}

export default MidSecStd
