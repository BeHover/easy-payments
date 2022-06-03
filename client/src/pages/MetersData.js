import React from "react";

import "../assets/styles/main.css";
import UpdateMetersDataItem from "../components/UpdateMetersDataItem";
import LordIcon from "../components/LordIcon";


function MetersDataPage() {
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
							<UpdateMetersDataItem icon="fas fa-burn" title="Газопостачання" description="АТ «УКРГАЗ»" data="384723" date="28.05.2022"></UpdateMetersDataItem>
							<UpdateMetersDataItem icon="fas fa-tint" title="Водопостачання" description="КП «Водоканал»" data="182742" date="28.05.2022"></UpdateMetersDataItem>
							<UpdateMetersDataItem icon="fas fa-fire-alt" title="Теплоенергія" description="АТ «Теплобуд»" data="726382" date="28.05.2022"></UpdateMetersDataItem>
							<div className="row">
								<div className="col-12 col-lg-4">
									<button type="submit" className="btn btn-primary col-12">Оновити інформацію</button>
								</div>
								<div className="col-12 col-lg-4">
									<a className="btn btn-secondary col-12 my-3 mb-lg-0 mt-lg-0" href="/payment">Перейти до сплати</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}


export default MetersDataPage;