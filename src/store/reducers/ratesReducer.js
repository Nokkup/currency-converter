import { SET_IS_RATES_ERROR, SET_RATES } from "../actionTypes";

const initialState = {
    source: "",
    rates: {},
    isError: false,
};

export function ratesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RATES:
            return { ...state, ...action.payload };
        case SET_IS_RATES_ERROR:
            return { ...state, isError: action.payload };
        default:
            return state;
    }
}
