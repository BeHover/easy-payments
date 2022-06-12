import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createBrowserHistory} from "history";
import {getSettlements, loginUser} from "../app/actions";
import {getSettlements as getSettlementsSelector} from "../app/selectors";
import serializeSettlements from "../utils/serializeSettlements";
import { Ring } from '@uiball/loaders'
import getUserToken from "../utils/getUserToken";

export default function LoginForm() {
    const dispatch = useDispatch();
    const password = useRef(null);
    const apartment = useRef(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [disableLoginButton, setDisableLoginButton] = useState(false);

    useEffect(
        () => {dispatch(getSettlements())},
        [dispatch]
    );
    const settlements = useSelector(getSettlementsSelector);

    if (null === settlements) {
        return(
            <div className="d-flex align-items-center">
                <Ring size={20} lineWeight={5} speed={2} color="black" />
                <span className="ms-2 fw-semibold">Зачекайте, відбувається завантаження даних..</span>
            </div>
        )
    }
    const serializedSettlements = serializeSettlements(settlements);

    const onLogin = (event) => {
        setLoading(true);
        setDisableLoginButton(true);
        event.preventDefault();
        dispatch(loginUser(apartment.current.value, password.current.value));
        navigate('/cabinet', { replace: true });
        setLoading(false);
        setDisableLoginButton(false);
    }

    if(getUserToken()) navigate('/cabinet', { replace: true });

    return (
        <form>
            <select ref={apartment} className="form-control">
                <option disabled value="">Оберіть адресу проживання</option>
                {serializedSettlements.map(settlement =>
                    <option key={settlement.id} value={settlement.id}>
                        {settlement.name}
                    </option>
                )}
            </select>
            <input type="password" ref={password} className="form-control my-3" placeholder="Укажіть комунальний код" />
            <div className="row">
                <div className="col-12 col-lg-6">
                    <button disabled={disableLoginButton} onClick={onLogin} className="btn btn-primary col-12 mx-auto">
                        {loading
                            ?
                                <span className="flex">
                                    <Ring size={24} lineWeight={5} speed={2} color="white" />
                                </span>
                            : <span>Продовжити</span>
                        }
                    </button>
                </div>
                <div className="col-12 col-lg-6">
                    <a className="btn btn-secondary col-12 mt-3 mt-lg-0" href="/register">Створити акаунт</a>
                </div>
            </div>
        </form>
    )
}