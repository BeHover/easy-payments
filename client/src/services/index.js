import axios from "axios";


const BASE_URL = "https://127.0.0.1:8000"
const LOGIN_USER = BASE_URL.concat('/login')


export function loginUserService(apartmentId, password)
{
    return axios.post(LOGIN_USER, {
        apartmentId, password
    })
}