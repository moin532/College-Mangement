import {legacy_createStore,combineReducers,applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import { StudentReducer,StudentAcees, NoteAdd} from "./reducer/StudentReducer"


const reducer = combineReducers({

    student : StudentReducer,
    optStudent : StudentAcees,
    noteMotivate : NoteAdd
   

});

let initialState = {}

const middleware = [thunk];

const store = legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store