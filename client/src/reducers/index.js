import {combineReducers} from '@reduxjs/toolkit'
import {
    LOGOUT_USER,
    SET_CURRENT_USER,
    SET_SETTLEMENTS,
    SET_INVOICES
} from "../app/actions";


function userReducer(state=null, action)
{
    switch(action.type)
    {
        case SET_CURRENT_USER:
            return {...state, user: action.payload.user};

        case LOGOUT_USER:
            return {};

        default:
            return state;
    }
}

function settlementReducer(state=null, action)
{
    switch(action.type)
    {
        case SET_SETTLEMENTS:
            return {...state, settlements: action.payload.settlements};

        default:
            return state;
    }
}

function invoicesReducer(state=null, action)
{
    switch(action.type)
    {
        case SET_INVOICES:
            return {...state, invoices: action.payload.invoices};

        default:
            return state;
    }
}


const mainReducer = combineReducers({
        consumer: userReducer,
        settlement: settlementReducer,
        invoice: invoicesReducer
    }
)


export default mainReducer;