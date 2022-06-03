import { all, call, takeEvery } from "redux-saga/effects"
import {LOGIN_USER} from "../app/actions";
import {loginUserService} from "../services";


function* loginUser(action) {
    try {
        yield call(
            loginUserService,
            action.payload.apartmentId,
            action.payload.password
        );
    } catch (e) {

    }
}


function* watchFetchAuthenticate() {
    yield takeEvery(LOGIN_USER, loginUser)
}


export default function* rootSaga() {
    yield all([
        watchFetchAuthenticate()
    ])
}