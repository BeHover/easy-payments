import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const useDispatching = (dispatchQuery, selector) => {
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(dispatchQuery);
    }, [dispatch])

    return useSelector(selector);
}