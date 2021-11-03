import {
    GET_CURRENCY_RATES,
    SET_IS_RATES_ERROR,
    SET_RATES,
} from "../actionTypes";

export const RatesActionCreators = {
    setRates: (rates) => {
        return { type: SET_RATES, payload: rates };
    },
    getRates: (baseCurrency) => {
        return { type: GET_CURRENCY_RATES, payload: baseCurrency };
    },
    setIsError: (isError) => {
        return { type: SET_IS_RATES_ERROR, payload: isError };
    },
};
