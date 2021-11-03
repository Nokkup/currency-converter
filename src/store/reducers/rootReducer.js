import { combineReducers } from "redux";
import { convertReducer as converted } from "./convertReducer";
import { ratesReducer as rates } from "./ratesReducer";

const reducers = {
    converted,
    rates
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
