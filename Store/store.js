import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//to connect with redux dev tool extension

//createstore takes reducer
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
