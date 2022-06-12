import React from "react";
import "../assets/styles/main.css";
import LoginForm from "../components/LoginForm";
import LordIcon from "../components/LordIcon";
import {Navigate} from "react-router-dom";
import getUserToken from "../utils/getUserToken";

export default function LoginPage() {
	const token = getUserToken();

	if(token) {
		return <Navigate to="/cabinet" />
	}

    return (
		<section className="bg-light bg-banner">
			<div className="d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center vh-100">
						<div className="col-12 col-lg-8 col-xxl-6">
							<h5 className="text-primary">Easy Payments - легко, швидко і захищено</h5>
							<h1 className="fw-bold">
								Вхід у особистий кабінет
								<LordIcon src="https://cdn.lordicon.com/ribdawhq.json" stroke="50" />
							</h1>
							<p>Авторизуйтеся, щоб перейти до особистого кабінету в <b>Easy Payments</b>.</p>
							<LoginForm/>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}