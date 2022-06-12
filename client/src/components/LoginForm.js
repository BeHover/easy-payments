import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSettlements, loginUser} from "../app/actions";
import {getSettlements as getSettlementsSelector} from "../app/selectors";
import {serializeSettlements} from "../utils";


function LoginForm() {
    let dispatch = useDispatch();
    let password = useRef(null);
    let apartment = useRef(null);

    useEffect(
        () => {dispatch(getSettlements())},
        [dispatch]
    );
    let settlements = useSelector(getSettlementsSelector);

    if (null === settlements) {
        return <div>...</div>
    }

    let serializedSettlements = serializeSettlements(settlements.settlements);

    let onLogin = (event) => {
        event.preventDefault();
        dispatch(loginUser(apartment.current.value, password.current.value))
    }

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
                    <button onClick={onLogin} className="btn btn-primary col-12">Продовжити</button>
                </div>
                <div className="col-12 col-lg-6">
                    <a className="btn btn-secondary col-12 mt-3 mt-lg-0" href="/register">Створити акаунт</a>
                </div>
            </div>
        </form>
    )
}


export default LoginForm;