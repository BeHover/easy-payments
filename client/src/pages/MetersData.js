import React from "react";
import "../assets/styles/main.css";
import UpdateMetersDataItem from "../components/UpdateMetersDataItem";
import LordIcon from "../components/LordIcon";
import NavigateButton from "../components/UI/buttons/NavigateButton";
import {Navigate} from "react-router-dom";
import getUserToken from "../utils/getUserToken";

export default function MetersDataPage() {
	const token = getUserToken();

	if(!token) {
		return <Navigate to="/login" />
	}


    return (
		<section className="bg-light bg-banner">
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="row m-0">
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<h5 className="text-primary">Ваш розумний вибір</h5>
							<h1 className="fw-bold">
								Показники лічильників
								<LordIcon src="https://cdn.lordicon.com/wloilxuq.json" stroke="60" />
							</h1>
							<p>У таблиці нижче представлена інформація про поточні показники лічильників. Для оновлення інформації, укажіть актуальні показники в поле введення.</p>
						</div>
						<div className="col-12 col-lg-8">
							<UpdateMetersDataItem icon="fas fa-bolt" title="Електроенергія" description="ДТЕК «Енерго»" data="283643" date="28.05.2022"></UpdateMetersDataItem>
							<UpdateMetersDataItem icon="fas fa-burn" title="Газопостачання" description="АТ «УКРГАЗ»" data="384723" date="22.05.2022"></UpdateMetersDataItem>
							<button type="submit" className="btn btn-primary col-12 col-lg-auto">Оновити інформацію</button>
							<NavigateButton to="/cabinet" text="Повернутися назад" classNames="btn btn-secondary col-12 col-lg-auto ms-3 my-3 mb-lg-0 mt-lg-0" />
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}