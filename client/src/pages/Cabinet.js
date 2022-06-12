import React, {useEffect} from "react";
import "../assets/styles/main.css";
import LordIcon from "../components/LordIcon";
import Hero from "../assets/images/design/hero-05.png";
import NavigateButton from "../components/UI/buttons/NavigateButton";
import IconNavigateButton from "../components/UI/buttons/IconNavigateButton";
import {getInvoices} from "../app/actions";
import {useDispatch} from "react-redux";
import getUserToken from "../utils/getUserToken";
import {Navigate} from "react-router-dom";

export default function CabinetPage() {
	const dispatch = useDispatch();
	const token = getUserToken();

	useEffect(
		() => {dispatch(getInvoices(token))},
		[dispatch]
	);

	if(!token) {
		return <Navigate to="/login" />
	}

    return (
		<section className="bg-light">
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="col-12 col-lg-6 mt-4 mt-lg-0">
						<h5 className="text-primary">Вітаємо у просторі Easy Payments</h5>
						<h1 className="fw-bold">
							Особистий кабінет
							<LordIcon src="https://cdn.lordicon.com/lupuorrc.json" stroke="60" />
						</h1>
						<p>Єдина автоматизована cистема комунальних розрахунків <b>Easy Payments</b> дає вам можливість внести у систему актуальні значення показників лічильників і сплатити комунальні послуги за декілька кліків, використовуючи картку.</p>
						<NavigateButton to="/meters-data" text="Показники лічильників" classNames="btn btn-primary col-12 col-lg-auto" />
						<IconNavigateButton to="/invoices" text="Оплата комунальних послуг" classNames="btn btn-empty col-12 col-lg-auto ms-lg-3 mt-2 mt-lg-0" />
					</div>
					<div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
						<img src={Hero} className="w-75" alt="Easy Payments Hero" draggable="false" />
					</div>
				</div>
			</div>
		</section>
    );
}