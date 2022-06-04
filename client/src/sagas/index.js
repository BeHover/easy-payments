import { all, put, call, takeEvery } from "redux-saga/effects"
import {
    GET_INVOICES,
    GET_SERVICES,
    GET_SETTLEMENT_INFO,
    LOGIN_USER,
    setCurrentUser,
    setInvoices,
    setServices,
    setSettlementInfo,
    getInvoices as getInvoicesAction, PAY_FOR_INVOICES
} from "../app/actions";
import {
    loginUserService,
    getSettlementInfoService,
    getInvoicesService,
    getServicesService,
    payForServicesService
} from "../services";


function* loginUser(action) {
    try {
        let response = yield call(
            loginUserService,
            action.payload.apartmentId,
            action.payload.password
        );

        yield put(setCurrentUser(response.data.token))
    } catch (e) {

    }
}

function* getSettlementInfo(action) {
    try {
        let response = yield call(
            getSettlementInfoService
        );

        yield put(setSettlementInfo(response.data));
    } catch (e) {

    }
}

function* getInvoices(action) {
    try {
        let response = yield call(
            getInvoicesService,
            action.payload.userToken
        );

        yield put(setInvoices(response.data));
    } catch (e) {

    }
}

function* getServices(action) {
    try {
        let response = yield call(
            getServicesService
        );

        yield put(setServices(response.data));
    } catch (e) {

    }
}

function* payForInvoices(action) {
    try {
        let response = yield call(
            payForInvoicesService,
            action.payload.userToken,
            action.payload.invoicesIds
        );

        yield put(getInvoicesAction(action.payload.userToken))
    } catch (e) {

    }
}


function* watchFetchAuthenticate() {
    yield takeEvery(LOGIN_USER, loginUser)
}

function* watchGetSettlementInfo() {
    yield takeEvery(GET_SETTLEMENT_INFO, getSettlementInfo)
}

function* watchGetInvoices() {
    yield takeEvery(GET_INVOICES, getInvoices)
}

function* watchGetServices() {
    yield takeEvery(GET_SERVICES, getServices())
}

function* watchPayForServices() {
    yield takeEvery(PAY_FOR_INVOICES, payForInvoices())
}


export default function* rootSaga() {
    yield all([
        watchFetchAuthenticate(),
        watchGetSettlementInfo(),
        watchGetInvoices(),
        watchGetServices(),
        watchPayForServices()
    ])
}
