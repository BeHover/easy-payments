import React from "react";

import "../assets/styles/main.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import Banner from "../assets/images/design/banner-01.png";
import Hero01 from "../assets/images/design/hero-01.png";
import Hero02 from "../assets/images/design/hero-02.png";
import Hero03 from "../assets/images/design/hero-03.png";
import Visa from "../assets/images/design/visa.png";
import MasterCard from "../assets/images/design/mastercard.png";
import PayPal from "../assets/images/design/paypal.png";


function HomePage() {
    return (
		<div className="bg-white">
			<Header/>

			<section className="bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6 mt-4 mt-lg-0">
							<h5 className="text-primary">Легко, швидко і захищено</h5>
							<h1 className="fw-bold">Сплачуйте комунальні послуги в декілька кліків</h1>
							<p>Оплата комунальних платежів онлайн — це швидкий і простий метод оплати не виходячи з дому. Подбайте про себе і своїх близьких - почніть користуватися Єдиною автоматизованою cистемою комунальних розрахунків <b>Easy Payments</b>.</p>
							<a className="btn btn-primary col-12 col-lg-auto" href="/register">Спробувати зараз</a>
							<a className="btn btn-empty col-12 col-lg-auto ms-lg-3 mt-2 mt-lg-0" href="#start">
								Детальніше
								<svg className="ms-2" width="18" height="16" viewBox="0 0 22 16" fill="#1a73e8" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.9807 0.260397C13.5723 -0.111308 12.9397 -0.0815071 12.5681 0.326971C12.1963 0.735433 12.2261 1.36789 12.6348 1.73961L18.4153 7.00001H1C0.447754 7.00001 0 7.44771 0 8.00001C0 8.5523 0.447754 9.00001 1 9.00001H18.4153L12.6348 14.2604C12.2261 14.6321 12.1963 15.2646 12.5681 15.673C12.9397 16.0815 13.5723 16.1113 13.9807 15.7396L21.6731 8.73961C21.8813 8.5501 22 8.28158 22 8.00001C22 7.71844 21.8813 7.44991 21.6731 7.2604L13.9807 0.260397Z"></path>
								</svg>
							</a>
						</div>
						<div className="col-12 col-lg-6 flex">
							<img src={Banner} className="w-75" alt="Easy Payments Banner" draggable="false" />
						</div>
					</div>
				</div>
			</section>

			<section className="container pt-5" id="start">
				<div className="row align-items-center">
					<div className="col-12 col-lg-6 flex order-2 order-lg-1 mt-4 mt-lg-0">
						<img src={Hero01} className="img-fluid" alt="Easy Payments Hero" draggable="false" />
					</div>
					<div className="col-12 col-lg-6 order-1 order-lg-2">
						<h5 className="text-primary">Легкий і зрозумілий інтерфейс</h5>
						<h1 className="fw-bold">Сплачувати онлайн - легко</h1>
						<p>З метою поліпшення процесу нарахування та оплати населенням платежів за житлово–комунальні та подібні послуги була створена Єдина автоматизована cистема комунальних розрахунків - <b>Easy Payments</b>.</p>
						<p>Завдяки цій cистемі кожен має змогу у Єдиному вікні сплачувати за будь–які комунальні послуги: водопостачання, газопостачання, електропостачання, постачання теплової енергії, утримання будинку, сміття, каналізація, тощо.</p>
						<a className="btn btn-primary col-12 col-lg-auto" href="/login">Перейти в особистий кабінет</a>
						<a className="btn btn-empty col-12 col-lg-auto ms-lg-3 mt-2 mt-lg-0" href="/register">
							Створити акаунт
							<svg className="ms-2" width="18" height="16" viewBox="0 0 22 16" fill="#1a73e8" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.9807 0.260397C13.5723 -0.111308 12.9397 -0.0815071 12.5681 0.326971C12.1963 0.735433 12.2261 1.36789 12.6348 1.73961L18.4153 7.00001H1C0.447754 7.00001 0 7.44771 0 8.00001C0 8.5523 0.447754 9.00001 1 9.00001H18.4153L12.6348 14.2604C12.2261 14.6321 12.1963 15.2646 12.5681 15.673C12.9397 16.0815 13.5723 16.1113 13.9807 15.7396L21.6731 8.73961C21.8813 8.5501 22 8.28158 22 8.00001C22 7.71844 21.8813 7.44991 21.6731 7.2604L13.9807 0.260397Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container pt-5">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<h5 className="text-primary">Комфорт для усіх користувачів сервісу</h5>
							<h1 className="fw-bold">Жодних додаткових комісій</h1>
							<p>Наша Єдина автоматизована cистема комунальних розрахунків <b>Easy Payments</b> не збагачується на людях. Ми працюємо для того, щоб кожем громадянин України мав змогу сплатити комунальні платежі з будь-якої точки на мапі планети без додаткових комісій і нарахувань. Тільки відкритість і прозорість.</p>
							<p>Вам не треба стояти в чергах аби сплатити за водопостачання, газопостачання, електропостачання, утримання будинку, тощо. Достатньо зайти на сервіс <b>Easy Payments</b>, авторизуватися в особистому кабінеті, обрати послуги і перейти до сплати. Декілька кліків замість декількох годин!</p>
							<div className="pt-2 d-flex justify-content-center justify-content-lg-start">
								<img src={Visa} height={25} className="me-3 me-lg-4" alt="Visa Partner" draggable="false" />
								<img src={MasterCard} height={30} className="me-3 me-lg-4" alt="MasterCard Partner" draggable="false" />
								<img src={PayPal} height={30} alt="PayPal Partner" draggable="false" />
							</div>
						</div>
						<div className="col-12 col-lg-6 flex mt-4 mt-lg-0">
							<img src={Hero02} className="img-fluid" alt="Easy Payments Hero" draggable="false" />
						</div>
					</div>
				</div>
			</section>

			<section className="container pt-5">
				<div className="row align-items-center">
					<div className="col-12 col-lg-6 flex order-2 order-lg-1">
						<img src={Hero03} className="img-fluid" alt="Easy Payments Support Team" draggable="false" />
					</div>
					<div className="col-12 col-lg-6 order-1 order-lg-2">
						<h5 className="text-primary">Цілодобова робота служби підтримки</h5>
						<h1 className="fw-bold">Допомога усім користувачам</h1>
						<p>Якщо при роботі із сервісом автоматизованої cистеми комунальних розрахунків <b>Easy Payments</b> у вас виникли запитання, ви можете звернутися у службу підтримки або задати їх нашим фахівцям за контактами, вказаними нижче.</p>
						<p>Ми обов'язково допоможемо кожному, хто потребує консультації при роботі з нашим сервісом або знайшов помилки у його роботі.</p>
						<p className="fw-bold mb-0">Наші контакти для зв'язку:</p>
						<p className="mb-0"><i className="far fa-envelope"></i>easypayments@support.ua</p>
						<p><i className="fas fa-phone-alt"></i>+38 (0564) 99–0–204</p>
					</div>
				</div>
			</section>

			<Footer/>
		</div>
    );
}


export default HomePage;