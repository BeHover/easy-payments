export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const LOGIN_USER = "LOGIN_USER"
export const REGISTER_USER = "REGISTER_USER"
export const GET_SETTLEMENTS = "GET_SETTLEMENTS"
export const SET_SETTLEMENTS = "SET_SETTLEMENTS"
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

export function registerUser(
    apartmentId,
    tenantName,
    tenantSurname,
    tenantPatronymics,
    passportId,
    password
)
{
    return {
        type: REGISTER_USER,
        payload: {
            apartmentId,
            tenantName,
            tenantSurname,
            tenantPatronymics,
            passportId,
            password
        }
    }
}

export function getSettlements()
{
    return {
        type: GET_SETTLEMENTS,
        payload: {}
    }
}

export function setSettlements(settlements)
{
    return {
        type: SET_SETTLEMENTS,
        payload: {settlements}
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

export function payForInvoices(userToken, invoicesIds)
{
    return {
        type: PAY_FOR_INVOICES,
        payload: {userToken, invoicesIds}
    }
}
