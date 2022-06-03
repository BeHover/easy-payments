import React from "react";

import "../assets/styles/main.css";
import MetersDataItem from "../components/MetersDataItem";
import LordIcon from "../components/LordIcon";


function PaymentPage() {
    return (
		<section className="bg-light bg-banner">
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="row m-0">
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<h5 className="text-primary">Ваш розумний вибір</h5>
							<h1 className="fw-bold">
								Вікно оплати послуг
								<LordIcon src="https://cdn.lordicon.com/qhviklyi.json" stroke="70" />
							</h1>
							<p>У таблиці нижче представлена інформація про поточні показники лічильників, дату їх внесення і прораховані системою суми до сплати.</p>
						</div>
						<div className="col-12 col-lg-8">
							<MetersDataItem icon="fas fa-bolt" title="Електроенергія" description="ДТЕК «Енерго»" data="283643" date="28.05.2022" sum="1247"></MetersDataItem>
							<MetersDataItem icon="fas fa-burn" title="Газопостачання" description="АТ «УКРГАЗ»" data="384723" date="28.05.2022" sum="1247"></MetersDataItem>
							<MetersDataItem icon="fas fa-tint" title="Водопостачання" description="КП «Водоканал»" data="182742" date="28.05.2022" sum="1247"></MetersDataItem>
							<MetersDataItem icon="fas fa-fire-alt" title="Теплоенергія" description="АТ «Теплобуд»" data="726382" date="28.05.2022" sum="1247"></MetersDataItem>
							<p className="my-3 text-center text-lg-start">Загальна сума до сплати: <span className="text-primary fw-bolder">4988₴</span></p>
							<div className="row">
								<div className="col-12 col-lg-4">
									<button type="submit" className="btn btn-primary col-12">Сплатити</button>
								</div>
								<div className="col-12 col-lg-4">
									<a className="btn btn-secondary col-12 my-3 my-lg-0" href="/meters-data">Показники лічильників</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}


export default PaymentPage;