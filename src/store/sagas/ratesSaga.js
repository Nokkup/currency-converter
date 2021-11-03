import { takeEvery, call, put } from "redux-saga/effects";
import { getRates } from "../../api";
import { RatesActionCreators } from "../actions/ratesActions";
import { GET_CURRENCY_RATES } from "../actionTypes";

function* getCurrencyRates({ payload }) {
    const response = yield call(getRates, payload);

    if (response.status === 200) {
        yield put(
            RatesActionCreators.setRates({
                source: response.data.source,
                rates: response.data.rates,
            })
        );
        yield put(RatesActionCreators.setIsError(false));
    } else {
        yield put(RatesActionCreators.setIsError(true));
    }
}

export function* watchGetCurrencyRates() {
    yield takeEvery(GET_CURRENCY_RATES, getCurrencyRates);
}
