import {applyMiddleware,createStore } from "redux";
import Reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
 
const middleware = [thunk];

const store = createStore(Reducer ,composeWithDevTools(applyMiddleware(...middleware)));

export default store;