import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../app/actions";


function LoginForm() {
    let dispatch = useDispatch();
    let password = useRef("");
    let onLogin = () => {
        dispatch(loginUser(1, password.current.value))
    }

    return (
        <form>
            <input type="text" className="form-control mt-3" placeholder="Виберіть адресу проживання" />
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