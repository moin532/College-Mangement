import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  REGISTER_REQUEST,
  CLEAR_ERRORS,
  REGISTER_SUCESS,
  REGISTER_FAIL,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCESS,
  OTP_VERIFY_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  LOAD_USER_SUCESS,
  ALL_STUDENTS_REQUEST,
  ALL_STUDENTS_SUCESS,
  ALL_STUDENTS_FAIL,
  ADD_MARKS_REQUEST,
  ADD_MARKS_SUCESS,
  ADD_MARKS_FAIL,
  STD_INFO_REQUEST,
  STD_INFO_SUCESS,
  STD_INFO_FAIL,
  NOTE_ADD_REQUEST,
  NOTE_ADD_SUCESS,
  NOTE_ADD_FAIL,
  NOTE_ALL_FAIL,
  NOTE_ALL_REQUEST,
  NOTE_ALL_SUCESS,
  TOPPERS_REQUEST,
  TOPPERS_SUCESS,
  TOPPERS_FAIL,
} from "../constant/StudentConstant";

export const StudentReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case OTP_VERIFY_REQUEST:
    case LOAD_USER_REQUEST:
    case TOPPERS_REQUEST:
      return {
        isAuthenticated: false,
        loading: true,
        isValidate: false,
      };

    case LOGIN_SUCESS:
    case REGISTER_SUCESS:
    case OTP_VERIFY_SUCESS:
    case LOAD_USER_SUCESS:
   
      return {
        loading: false,
        user: action.payload,
        ...state,
        isAuthenticated: true,
        isValidate: true,
      };

    case TOPPERS_SUCESS:
      return{
        loading:false,
        toppers: action.payload        ,
        ...state
      }

    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case OTP_VERIFY_FAIL:
    case TOPPERS_FAIL:
       return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        isValidate: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const StudentAcees = (state={} , action)=>{

   switch (action.type) {
    case ALL_STUDENTS_REQUEST:
      case ADD_MARKS_REQUEST:
          case STD_INFO_REQUEST:
        return{
          ...state,
          loading: true
        }
    
    case ALL_STUDENTS_SUCESS:
      return{
        loading: false,
        std : action.payload,
        ...state
      }

      case STD_INFO_SUCESS:
        return{
          ...state,
          loading: false,
          data:action.payload
        }

      case ADD_MARKS_SUCESS:
        return{
          loading:false,
          isAdded : action.payload,
          ...state
        }

      case ALL_STUDENTS_FAIL:
        case ADD_MARKS_FAIL:
          case STD_INFO_FAIL:
        return{
          loading: false,
          ...state,
          error: action.payload
        }

      case CLEAR_ERRORS:
        return{
          ...state,
          error : null
        }

    default:
       return state
   }

}

export const NoteAdd =(state={}, action)=>{

  switch(action.type){

    case NOTE_ADD_REQUEST:
      case NOTE_ALL_REQUEST:   
       
      return{
        ...state,
        loading: true,
      }

      case NOTE_ADD_SUCESS:
      
        return {
          loading: false,
          notes :action.payload,
          ...state
        }

      case NOTE_ALL_SUCESS:
        return{
          loading : false,
          ...state,
          allNts : action.payload
        }

      case NOTE_ADD_FAIL:
        case NOTE_ALL_FAIL:
      return{
          loading:false,
          error: action.payload,
          ...state
      }
     
    default:
      return state
  }

}