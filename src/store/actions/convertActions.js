import {
    GET_CONVERTED_CURRENCY,
    SET_CONVERTED_CURRENCY,
    SET_IS_CONVERT_ERROR,
} from "../actionTypes";

export const ConvertActionCreators = {
    setConvertedCurrency: (converted) => {
        return { type: SET_CONVERTED_CURRENCY, payload: converted };
    },
    convert: (params) => {
        return { type: GET_CONVERTED_CURRENCY, payload: params };
    },
    setIsError: (isError) => {
        return { type: SET_IS_CONVERT_ERROR, payload: isError };
    },
};
