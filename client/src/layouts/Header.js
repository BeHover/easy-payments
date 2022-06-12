import React from "react";
import "../assets/styles/header.css";
import Logo from "../logo.png"
import NavbarTogglerButton from "../components/UI/buttons/NavbarTogglerButton";
import NavigateButton from "../components/UI/buttons/NavigateButton";

export default function Header() {
    return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<div className="navbar-brand">
					<img src={Logo} alt="Logo" draggable="false"/>
					<div className="navbar-brand-text">
						<h5>Easy Payments</h5>
						<p>Комунальні платежі онлайн</p>
					</div>
				</div>
				<NavbarTogglerButton/>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavigateButton to="/login" text="Увійти" classNames="btn btn-secondary me-lg-3" />
						</li>
						<li className="nav-item">
							<NavigateButton to="/register" text="Новий акаунт" classNames="btn btn-primary" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
}