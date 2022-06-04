export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const LOGIN_USER = "LOGIN_USER"
export const GET_SETTLEMENT_INFO = "GET_SETTLEMENT_INFO"
export const SET_SETTLEMENT_INFO = "SET_SETTLEMENT_INFO"
export const GET_INVOICES = "GET_INVOICES"
export const SET_INVOICES = "SET_INVOICES"
export const GET_SERVICES = "GET_SERVICES"
export const SET_SERVICES = "SET_SERVICES"
export const PAY_FOR_INVOICES = "PAY_FOR_INVOICES"


export function setCurrentUser(user)
{
    return {
        type: SET_CURRENT_USER,
        payload: {user}
    }
}

export function logoutUser()
{
    return {
        type: LOGOUT_USER,
        payload: {}
    }
}

export function loginUser(apartmentId, password)
{
    return {
        type: LOGIN_USER,
        payload: {apartmentId, password}
    }
}

export function getSettlementInfo()
{
    return {
        type: GET_SETTLEMENT_INFO,
        payload: {}
    }
}

export function setSettlementInfo(settlementData)
{
    return {
        type: SET_SETTLEMENT_INFO,
        payload: {settlementData}
    }
}

export function getInvoices(userToken)
{
    return {
        type: GET_INVOICES,
        payload: {userToken}
    }
}

export function setInvoices(invoices)
{
    return {
        type: SET_INVOICES,
        payload: {invoices}
    }
}

export function getServices()
{
    return {
        type: GET_SERVICES,
        payload: {}
    }
}

export function setServices(services)
{
    return {
        type: SET_SERVICES,
        payload: {services}
    }
}

export function payForInvoices(userToken, invoicesIds)
{
    return {
        type: PAY_FOR_INVOICES,
        payload: {userToken, invoicesIds}
    }
}
