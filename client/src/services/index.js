import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080"
const LOGIN_USER = BASE_URL.concat('/login')
const REGISTER_USER = BASE_URL.concat('/register')
const GET_SETTLEMENTS = BASE_URL.concat('/settlement')
const GET_SERVICES = BASE_URL.concat('/service')
const GET_INVOICES = BASE_URL.concat('/invoice')
const PAY_FOR_INVOICES = BASE_URL.concat('/invoice/pay')


export function loginUserService(apartmentId, password)
{
    return axios.post(LOGIN_USER, {
        apartmentId,
        password
    })
}

export function registerUserService(
    apartmentId,
    tenantName,
    tenantSurname,
    tenantPatronymics,
    passportId,
    password
)
{
    return axios.post(REGISTER_USER, {
        apartmentId,
        tenantName,
        tenantSurname,
        tenantPatronymics,
        passportId,
        password
    })
}

export function getSettlementsService()
{
    return axios.get(GET_SETTLEMENTS);
}

export function getServicesService()
{
    return axios.get(GET_SERVICES);
}

export function getInvoicesService(userToken)
{
    return axios.get(GET_INVOICES, {
        headers: {'X-AUTH-TOKEN': userToken}
    })
}

export function payForInvoicesService(userToken, invoices)
{
    return axios.post(PAY_FOR_INVOICES, {
        headers: {'X-AUTH-TOKEN': userToken},
        invoices: invoices
    })
}