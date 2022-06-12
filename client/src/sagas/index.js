import { all, put, call, takeEvery } from "redux-saga/effects"

import {
    GET_INVOICES,
    GET_SERVICES,
    GET_SETTLEMENTS,
    LOGIN_USER,
    PAY_FOR_INVOICES,
    REGISTER_USER,
    setCurrentUser,
    setInvoices,
    setServices,
    setSettlements
} from "../app/actions";

import {
    loginUserService,
    registerUserService,
    getSettlementsService,
    getServicesService,
    getInvoicesService,
    payForInvoicesService
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

function* registerUser(action) {
    try {
        let response = yield call(
            registerUserService,
            action.payload.apartmentId,
            action.payload.tenantName,
            action.payload.tenantSurname,
            action.payload.tenantPatronymics,
            action.payload.passportId,
            action.payload.password
        );

        yield put(setCurrentUser(response.data.token))
    } catch (e)  {

    }
}

function* getSettlements() {
    try {
        let response = yield call(
            getSettlementsService
        );

        yield put(setSettlements(response.data));
    } catch (e) {

    }
}

function* getServices() {
    try {
        let response = yield call(
            getServicesService
        );

        yield put(setServices(response.data));
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

function* payForInvoices(action) {
    try {
        yield call(
            payForInvoicesService,
            action.payload.userToken,
            action.payload.invoicesIds
        );

        yield put(getInvoices(action.payload.userToken))
    } catch (e) {

    }
}


function* watchFetchAuthenticate() {
    yield takeEvery(LOGIN_USER, loginUser)
}

function* watchFetchRegister() {
    yield takeEvery(REGISTER_USER, registerUser)
}

function* watchGetSettlements() {
    yield takeEvery(GET_SETTLEMENTS, getSettlements)
}

function* watchGetServices() {
    yield takeEvery(GET_SERVICES, getServices)
}

function* watchGetInvoices() {
    yield takeEvery(GET_INVOICES, getInvoices)
}

function* watchPayForServices() {
    yield takeEvery(PAY_FOR_INVOICES, payForInvoices)
}


export default function* rootSaga() {
    yield all([
        watchFetchAuthenticate(),
        watchFetchRegister(),
        watchGetSettlements(),
        watchGetServices(),
        watchGetInvoices(),
        watchPayForServices()
    ])
}
