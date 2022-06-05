import {combineReducers} from '@reduxjs/toolkit'
import {
    LOGOUT_USER,
    SET_CURRENT_USER,
    SET_SETTLEMENTS,
    SET_INVOICES
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

function settlementReducer(state=null, action)
{
    let copy = {...state};

    switch(action.type)
    {
        case SET_SETTLEMENTS:
            copy = action.payload.settlementData;
            break;

        default:
            copy = {};
            break;
    }

    return copy;
}

function invoicesReducer(state=null, action)
{
    let copy = {...state};

    switch(action.type)
    {
        case SET_INVOICES:
            copy = action.payload.invoices;
            break;

        default:
            copy = {};
            break;
    }

    return copy;
}


const mainReducer = combineReducers({
        user: userReducer,
        settlement: settlementReducer,
        invoices: invoicesReducer
    }
)


export default mainReducer;