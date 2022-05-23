export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const LOGIN_USER = "LOGIN_USER"


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