import {
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOAD_USER_FAIL,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCESS,
  OTP_VERIFY_FAIL,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCESS,
  ALL_STUDENTS_FAIL,
  ALL_STUDENTS_REQUEST,
  ALL_STUDENTS_SUCESS,
  ADD_MARKS_REQUEST,
  ADD_MARKS_SUCESS,
  STD_INFO_FAIL,
  STD_INFO_REQUEST,
  STD_INFO_SUCESS,
  NOTE_ADD_FAIL,
  NOTE_ADD_REQUEST,
  NOTE_ADD_SUCESS,
  NOTE_ALL_REQUEST,
  NOTE_ALL_SUCESS,
  NOTE_ALL_FAIL,
  TOPPERS_FAIL,
  TOPPERS_REQUEST,
  TOPPERS_SUCESS,
} from "../constant/StudentConstant";
import Cookies from "js-cookie";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};


export const logine = (phoneNumber, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      'https://college-mangement.vercel.app/api/v1/Login',
      { phoneNumber, password },
      config
    );

    dispatch({
      type: LOGIN_SUCESS,
      payload: data,
    });

    Cookies.set("username", JSON.stringify(data.Token), {
      expires: 7,
      path: "/",
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.content,
    });
  }
};

export const Registere = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const { data } = await axios.post(
      "https://college-mangement.vercel.app/api/v1/register",
      userData,
      config
    );

    Cookies.set("username", JSON.stringify(data.Token), {
      expires: 7,
      path: "/",
    });

    dispatch({
      type: REGISTER_SUCESS,
      payload: data.Token,
    });
  } catch (error) {
    
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const verifyOtpe = (email, otp) => async (dispatch) => {
  try {
    dispatch({ type: OTP_VERIFY_REQUEST });

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/verify",
      { email, otp },
      config
    );

    dispatch({
      type: OTP_VERIFY_SUCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: OTP_VERIFY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const token = JSON.parse(Cookies.get("username"));

    const config = {
      headers: {
        authorization: `${token}`,
      },
    };

    const { data } = await axios.get("https://college-mangement.vercel.app/api/v1/me", config);

    dispatch({
      type: LOAD_USER_SUCESS,
      payload: data.UserData,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AllStudentFetch = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_STUDENTS_REQUEST });

    const token = JSON.parse(Cookies.get("username"));

    const config = {
      headers: {
        authorization: `${token}`,
      },
    };

    const { data } = await axios.get(
      "https://college-mangement.vercel.app/api/v1/admin/all",
      config
    );

    dispatch({
      type: ALL_STUDENTS_SUCESS,
      payload: data.AllData,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_STUDENTS_FAIL,
      payload: error.response.data.content,
    });
  }
};

export const AddMarkse = (id,subjectse) => async (dispatch) => {


  try {
    dispatch({ type: ADD_MARKS_REQUEST });

  
    const { data } = await axios.put(
      `https://college-mangement.vercel.app/api/v1/marks/${id}`,
       JSON.stringify(subjectse),
      config
      
    );

    dispatch({
      type: ADD_MARKS_SUCESS,
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_STUDENTS_FAIL,
      payload: error.response.data.content,
    });
  }
};

export const SingleStudent =(id)=>async(dispatch)=>{

  try {
     dispatch({type:STD_INFO_REQUEST})

     const {data} = await axios.get(`https://college-mangement.vercel.app/api/v1/student/${id}`);
     dispatch({
      type:STD_INFO_SUCESS,
      payload: data.Std
     })


  } catch (error) {
    console.log(error);
    dispatch({
      type: STD_INFO_FAIL,
      payload:error.response.data.content
    })
  }
};


export const MotivateNote = (note)=>async(dispatch)=>{
  try {

  dispatch({ type: NOTE_ADD_REQUEST});

  const token = JSON.parse(Cookies.get("username"));

  const config = {
    headers: {
      authorization: `${token}`,
    },
  };


  const {data} = await axios.put(' https://college-mangement.vercel.app/api/v1/add',note,config);

  dispatch({
    type: NOTE_ADD_SUCESS,
    payload:data.msg
  })
    
  } catch (error) {
    console.log(error);
     dispatch({
      type: NOTE_ADD_FAIL,
      payload: error.response.data.err
     })
    
  }

}

export const AllNotes = ()=>async(dispatch)=>{
  try {

  dispatch({ type: NOTE_ALL_REQUEST});

  const {data} = await axios.get(' https://college-mangement.vercel.app/api/v1/notes',);

  dispatch({
    type: NOTE_ALL_SUCESS,
    payload:data.AllNotes
  })
    
  } catch (error) {
    
     dispatch({
      type: NOTE_ALL_FAIL,
      payload: error.response.data.err
     })
    
  }
}

export const TopperList = () =>async(dispatch)=>{
   try {

    dispatch({   type: TOPPERS_REQUEST })
    
    const data = await axios.get('https://college-mangement.vercel.app/api/v1/student',config)

    dispatch({
      type : TOPPERS_SUCESS,
      payload: data.data.stdTopppers
    })
   } catch (error) {
    console.log(error);
    dispatch({
      type: TOPPERS_FAIL,
      payload: error.response.data.err
    })
   }

}
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
