import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useParams,  } from 'react-router-dom'
import { AddMarkse, SingleStudent ,clearErrors} from '../action/StudentAction';
import {  toast } from 'react-toastify';
import TableCard from './TableCard';


const AddMarks = () => {

  const {id} =useParams();
 const dispatch = useDispatch();

 
 const { loading, data, error, isAdded } = useSelector((state) => state.optStudent);
 
 


  const defaultSubjects = [
    { subjectName: "", marks: "" },
    { subjectName: "", marks: "" },
    { subjectName: "", marks: "" }
  ];


  const [subjects, setSubjects] = useState(() => {

    [
             
           { subjectName: "", marks: "" }
        

    ]

    // Attempt to load saved subjects from localStorage
    const savedSubjects = JSON.parse(localStorage.getItem('subjects'));
    const data = savedSubjects ? savedSubjects.subjects : ""
    return data|| defaultSubjects
  });
  

  

  const handleInputChange = (index, event) => {

    const values = [...subjects];
  
    if (event.target.name === "subjectName") {
      values[index].subjectName = event.target.value;
    } else {
      values[index].marks = event.target.value;
    }
    setSubjects(values);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subjectName: "", marks: "" }]);
  };

  const handleRemoveSubject = (index) => {
    const values = [...subjects];
    values.splice(index, 1);
    setSubjects(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      localStorage.setItem('subjects', JSON.stringify({subjects}));
      dispatch(AddMarkse(id , {subjects}))
  
  };


  
  useEffect(()=>{
    
    if(error){
      toast.error(error);
      dispatch(clearErrors());
    }
    if(isAdded){
      toast.success('Marks added succesfully');
  
    }
    dispatch(SingleStudent(id));
  },[dispatch,isAdded,error]);

 if (!data) {
  return <div>Loading...Pls wait a movement </div>;
}

  return (
    
    <Wrapper>
     {
      data ?  
        <div className=' h-full ' id="main">
        <h1 className='flex  justify-center font-bold text-5xl mt-7  underline' >Student Profile</h1>

        <div className=' ml-44 grid grid-cols-2 gap-4 mt-12 text-4xl p-14 sm:col-span-1' id="content">

          <div className=' '>
          <h3 className=' font-serif font-semibold  mb-7  text-lime-600 '>Student Name : <span className=' text-yellow-400 font-semibold  text-5xl capitalize'>{data.name}</span></h3>
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '> UUCMS-No     : <span className='  text-violet-700  font-semibold '>{data.uucmsNo}</span></h3>
  
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '>Std Year: <span className='  text-violet-700 font-semibold '>{data.stdYear}</span></h3>
          <h3 className=' font-serif font-semibold  mb-7 text-lime-600 '> Domain : <span className='  text-violet-700 font-semibold  '>BCA</span></h3>

          </div>
      


<div>
 
</div>


      </div>
      </div>

: ""
}

      <h1 className='flex  justify-center font-bold text-5xl mt-7  underline' >Add Student Marks</h1>
      <div className=' flex justify-center' id="container">        
    <form onSubmit={handleSubmit} id="main">
      {subjects.map((subject, index) => (
        <div key={index} id="sec">
          <input
            name="subjectName"
            type="text"
            placeholder="Subject Name"
            value={subject.subjectName}
            onChange={(e) => handleInputChange(index, e)}
            className=' w-96'
            id="inp"
          />
          <input
            name="marks"
            type="number"
            placeholder="Marks"
            value={subject.marks}
            onChange={(e) => handleInputChange(index, e)}
            id="inp-mark"
            className='mark'
            required
  
          />
          <button type="button" onClick={() => handleRemoveSubject(index)} className=' text-2xl from-neutral-500 pl-9 '>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddSubject} className=' flex justify-around font-bold mb-6 text-amber-600 text-2xl hover:animate-bounce'>
        Add Another Subject
      </button>

      <button type='submit' className="btn transparent " id="sign-up-btn" >
          Submit
        </button>
    </form>
       </div>



       <div className='tbl'>
       <h1 className='flex  justify-center font-bold text-5xl mt-7  underline' >Prev Marks</h1>


             
               <TableCard user={data} />

               
              
          
       
       
         
         </div>

            </Wrapper>
  );

}

const Wrapper = styled.section`
  
  #container{
    height: 100vh;

  }
 

  .tbl {
    margin-top: -40vh;
}
  input#inp {
    background: none;
    outline: none; 
  
  border: none; 
    font-weight: 600;
    font-size: 2.1rem;
    height: 5vh;
    width: 46vh;
}

#sec {
   
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    padding: 9px 2.4rem;
   
}

input.mark {
    background: none;
    outline: none; 
    font-weight: 600;
    font-size: 2.1rem;
    height: 5vh;
    width: 30vh;
}


.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #3f5f97;
}

`


export default AddMarks
