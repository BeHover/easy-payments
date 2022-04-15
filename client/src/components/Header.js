import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from "../favicon.ico";

function Header()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link to={'/'}>
                    <a className="navbar-brand">
                        <img src={logo} alt="Logo" draggable="false"/>
                        <h5>EASY PAYMENTS<br/><span>Комунальні платежі онлайн</span></h5>
                    </a>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="navbar-collapse collapse" id="navbarToggler">
                    <ul className="navbar-nav m-auto justify-content-center">
                        <li className="nav-item top">
                            <Link to={'/'}>
                                <a className="nav-link">
                                    <span className="icon"><i className="bi bi-house-fill"/></span>
                                    <span className="title">Головна сторінка</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'}>
                                <a className="nav-link">
                                    <span className="icon"><i className="bi bi-person-fill"/></span>
                                    <span className="title">Кабінет Абонента</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/faq'}>
                                <a className="nav-link">
                                    <span className="icon"><i className="bi bi-life-preserver"/></span>
                                    <span className="title">Служба підтримки</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="profile d-flex justify-content-start align-items-center">
                        <Link to={'/'}>
                            <a className="d-flex">
                                <div className="profile-block">
                                    <i className="fas fa-user"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="profile-text mx-2">
                                        <h4>Берест Ігор Олегович</h4>
                                        <p>вул. Громова, будинок 77</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={'/'}>
                            <a className="btn btn-primary mx-md-3">
                                <i className="far fa-sign-out"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header;