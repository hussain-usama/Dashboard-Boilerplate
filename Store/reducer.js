import { combineReducers } from "redux";
//import { actionTypes } from "./action.js";

let UserState = {
  name: "khadija",
  email: "abc@abc.com",
  // userType: "admin",
  userType: "user",
  phone: "01234123123",
};

export const UserReducer = (state = UserState, action) => {
  //action will contain the object of dispatch
  //vallues from action will be in action.payload
  //   switch (action.type) {
  //     case actionTypes.INCREMENT_COUNTER:
  //       state = Object.assign({}, state, {
  //         ...state,
  //         counter: state.counter + action.payload,
  //       });
  //       return state;
  //     case actionTypes.DECREMENT_COUNTER:
  //       state = Object.assign({}, state, {
  //         ...state,
  //         counter: state.counter - action.payload,
  //       });
  //       return state;
  //     default:
  //       return state;
  //   }

  return state;
};

export default combineReducers({ UserReducer });
// all the reducers .
