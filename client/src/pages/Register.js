import React from "react";

import "../assets/styles/main.css";
import LordIcon from "../components/LordIcon";


function RegisterPage() {
    return (
		<section className="bg-light bg-banner">
			<div className="d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center vh-100">
						<div className="col-12 col-lg-6">
							<h5 className="text-primary">Easy Payments - легко, швидко і захищено</h5>
							<h1 className="fw-bold">
								Створення нового акаунту
								<LordIcon src="https://cdn.lordicon.com/qduilmpq.json" stroke="60" />
							</h1>
							<p>Заповність усі поля, щоб зареєструвати новий акаунт у системі <b>Easy Payments</b>.</p>
							<form>
								<input type="text" className="form-control mt-3" placeholder="Виберіть адресу проживання" />
								<input type="password" className="form-control my-3" placeholder="Оберіть комунальний код" />
								<div className="row">
									<div className="col-12 col-lg-6">
										<button type="submit" className="btn btn-primary col-12">Створити акаунт</button>
									</div>
									<div className="col-12 col-lg-6">
										<a className="btn btn-secondary col-12 mt-3 mt-lg-0" href="/login">Авторизація</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}


export default RegisterPage;