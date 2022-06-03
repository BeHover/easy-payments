import {combineReducers} from '@reduxjs/toolkit'
import {
    LOGOUT_USER,
    SET_CURRENT_USER
} from "../app/actions";


function userReducer(state=null, action)
{
    let copy = {...state};

    switch(action.type)
    {
        case SET_CURRENT_USER:
            copy = action.payload.user;
            break;

        case LOGOUT_USER:
            copy = {};
            break;

		default:
			copy = {};
			break;
    }
    return copy;
}


const mainReducer = combineReducers({
        user: userReducer
    }
)


export default mainReducer;