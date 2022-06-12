import {combineReducers} from '@reduxjs/toolkit'
import {
    SET_SETTLEMENTS,
    SET_INVOICES, SET_SERVICES
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

function serviceReducer(state={services: null}, action)
{
    switch (action.type)
    {
        case SET_SERVICES:
            return {...state, services: action.payload.services};

        default:
            return state;
    }
}


const mainReducer = combineReducers({
        settlement: settlementReducer,
        invoice: invoicesReducer,
        service: serviceReducer
    }
)


export default mainReducer;