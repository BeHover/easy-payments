import React from "react";
import "../assets/styles/main.css";
import Hero from "../assets/images/design/hero-04.png";
import NavigateButton from "../components/UI/buttons/NavigateButton";

export default function ErrorPage() {
    return (
		<section className="bg-light">
			<div className="container">
				<div className="row px-2 align-items-center vh-100">
					<div className="col-12 col-lg-6 mt-4 mt-lg-0">
						<h5 className="text-primary">Упс, виникла помилка</h5>
						<h1 className="fw-bold">Сторінка не знайдена</h1>
						<p>Мабуть, ви намагалися отримати доступ до певної сторінки, але натрапили на ту, якої не існує. Не хвилюйтеся! Натисніть на кнопку, щоб перейти на головну сторінку сайту, а також <b>не використовуйте сторонні посилання</b>.</p>
						<NavigateButton to="/" text="На головну сторінку" classNames="btn btn-primary" />
					</div>
					<div className="col-12 col-lg-6 d-none d-lg-flex justify-content-center justify-content-lg-end">
						<img src={Hero} className="w-75" alt="Easy Payments Hero" draggable="false" />
					</div>
				</div>
			</div>
		</section>
    );
}