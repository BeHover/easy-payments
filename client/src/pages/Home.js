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
import NavigateButton from "../components/UI/buttons/NavigateButton";
import IconNavigateButton from "../components/UI/buttons/IconNavigateButton";

export default function HomePage() {
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
							<NavigateButton to="/register" text="Спробувати зараз" classNames="btn btn-primary col-12 col-lg-auto" />
							<IconNavigateButton to="/register" text="Детальніше" classNames="btn btn-empty col-12 col-lg-auto ms-lg-3 mt-2 mt-lg-0" />
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
						<NavigateButton to="/login" text="Перейти в особистий кабінет" classNames="btn btn-primary col-12 col-lg-auto" />
						<IconNavigateButton to="/register" text="Створити акаунт" classNames="btn btn-empty col-12 col-lg-auto ms-lg-3 mt-2 mt-lg-0" />
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
						<p className="mb-0"><i className="far fa-envelope me-2"></i>easypayments@support.ua</p>
						<p><i className="fas fa-phone-alt me-2"></i>+38 (0564) 99–0–204</p>
					</div>
				</div>
			</section>

			<Footer/>
		</div>
    );
}