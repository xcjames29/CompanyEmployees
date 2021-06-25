import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/root_reducers";


const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));