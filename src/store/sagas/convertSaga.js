import { takeEvery, call, put } from "redux-saga/effects";
import { convert } from "../../api";
import { ConvertActionCreators } from "../actions/convertActions";
import { GET_CONVERTED_CURRENCY } from "../actionTypes";

function* convertCurrency({ payload }) {
    const response = yield call(convert, payload);

    if (response.status === 200) {
        yield put(
            ConvertActionCreators.setConvertedCurrency({
                ...payload,
                result: response.data.result,
            })
        );
        yield put(ConvertActionCreators.setIsError(false));
    } else {
        yield put(ConvertActionCreators.setIsError(true));
    }
}

export function* watchConvertCurrency() {
    yield takeEvery(GET_CONVERTED_CURRENCY, convertCurrency);
}
