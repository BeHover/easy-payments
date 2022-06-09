import React from "react";
import "../assets/styles/main.css";
import LordIcon from "../components/LordIcon";
import UpdateServices from "../components/UpdateServices";
import NavigateButton from "../components/UI/buttons/NavigateButton";

export default function Services() {
    return (
		<div className="bg-light bg-banner">
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="row m-0">
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<h5 className="text-primary">Простота у легкості дій</h5>
							<h1 className="fw-bold">
								Панель керування
								<LordIcon src="https://cdn.lordicon.com/qhviklyi.json" stroke="70" />
							</h1>
							<p>Додавання, редагування та видалення актуальних сервісів.</p>
						</div>
						<div className="col-12 col-lg-8">
							<div className="row m-0 align-items-center">
								<UpdateServices icon="fas fa-bolt" title="Електроенергія" description="ДТЕК «Енерго»" pricePerHumane="5.0" pricePerUnit="8.0"></UpdateServices>
								<UpdateServices icon="fas fa-burn" title="Газопостачання" description="АТ «УКРГАЗ»" pricePerHumane="5.0" pricePerUnit="8.0"></UpdateServices>
								<UpdateServices icon="fas fa-tint" title="Водопостачання" description="КП «Водоканал»" pricePerHumane="5.0" pricePerUnit="8.0"></UpdateServices>
								<UpdateServices icon="fas fa-fire-alt" title="Теплоенергія" description="АТ «Теплобуд»" pricePerHumane="5.0" pricePerUnit="8.0"></UpdateServices>
							</div>
							<NavigateButton to="/admin/services" text="Додати новий сервіс" classNames="btn btn-primary col-12 col-lg-auto" />
							<NavigateButton to="/" text="Повернутися на головну" classNames="btn btn-secondary col-12 col-lg-auto ms-3 my-3 mb-lg-0 mt-lg-0" />
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}