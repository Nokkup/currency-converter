import { all } from "redux-saga/effects";
import { watchConvertCurrency } from "./convertSaga";
import { watchGetCurrencyRates } from "./ratesSaga";

export function* rootSaga() {
    yield all([watchGetCurrencyRates(), watchConvertCurrency()]);
}
