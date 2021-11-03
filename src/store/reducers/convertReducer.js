import { SET_CONVERTED_CURRENCY, SET_IS_CONVERT_ERROR } from "../actionTypes";

const initialState = {
    value: 0,
    from: "",
    to: "",
    result: 0,
    isError: false,
};

export function convertReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CONVERTED_CURRENCY:
            return { ...state, ...action.payload };
        case SET_IS_CONVERT_ERROR:
            return { ...state, isError: action.payload };
        default:
            return state;
    }
}
