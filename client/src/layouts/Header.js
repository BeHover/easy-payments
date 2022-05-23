import React from "react";

import "../assets/styles/header.css";
import Logo from "../logo.png"


function Header() {
    return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={Logo} alt="Logo" draggable="false"/>
					<div className="navbar-brand-text">
						<h5>Easy Payments</h5>
						<p>Комунальні платежі онлайн</p>
					</div>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
						aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link btn btn-secondary me-lg-3" href="/login">Увійти</a>
						</li>
						<li className="nav-item">
							<a className="nav-link btn btn-primary" href="/register">Новий акаунт</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
}


export default Header;