import React from "react";
import "../assets/styles/main.css";
import LordIcon from "../components/LordIcon";
import NavigateButton from "../components/UI/buttons/NavigateButton";

export default function RegisterPage() {
    return (
		<section className="bg-light bg-banner">
			<div className="d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center vh-100">
						<div className="col-12 col-lg-8 col-xxl-6">
							<h5 className="text-primary">Easy Payments - легко, швидко і захищено</h5>
							<h1 className="fw-bold">
								Створення нового акаунту
								<LordIcon src="https://cdn.lordicon.com/qduilmpq.json" stroke="60" />
							</h1>
							<p>Заповність усі поля, щоб зареєструвати новий акаунт у системі <b>Easy Payments</b>.</p>
							<form>
								<input type="text" className="form-control mt-3" placeholder="Укажіть ваше ім'я" />
								<input type="text" className="form-control mt-3" placeholder="Укажіть ваше прізвище" />
								<input type="text" className="form-control mt-3" placeholder="Укажіть ваше по-батькові" />
								<input type="text" className="form-control mt-3" placeholder="Укажіть ваш номер паспорту" />
								<input type="text" className="form-control mt-3" placeholder="Виберіть адресу проживання" />
								<input type="password" className="form-control my-3" placeholder="Укажіть комунальний код" />
								<button type="submit" className="btn btn-primary col-12 col-lg-auto">Створити акаунт</button>
								<NavigateButton to="/login" text="Вже є акаунт?" classNames="btn btn-secondary col-12 col-lg-auto ms-3 my-3 mb-lg-0 mt-lg-0" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}