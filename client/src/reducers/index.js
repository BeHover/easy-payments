import {combineReducers} from '@reduxjs/toolkit'
import {
    SET_SETTLEMENTS,
    SET_INVOICES
} from "../app/actions";


function settlementReducer(state={settlements: null}, action)
{
    switch(action.type)
    {
        case SET_SETTLEMENTS:
            return {...state, settlements: action.payload.settlements};

        default:
            return state;
    }
}

function invoicesReducer(state={invoices: null}, action)
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
        settlement: settlementReducer,
        invoice: invoicesReducer
    }
)


export default mainReducer;