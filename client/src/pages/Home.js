import React from "react";


import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function HomePage() {
    return (
        <div className="container-fluid p-0">
            <Header/>
            <div className="header"/>
            <div className="container container-padding pb-0 pb-md-5">
                <div className="header-title">
                    <div className="row m-0">
                        <div className="col-10 col-lg-12 mx-auto">
                            <h1>EASY PAYMENTS</h1>
                            <p>Сплачуйте комунальні платежі за декілька хвилин</p>
                        </div>
                        <div className="col-10 col-lg-4 mx-auto">
                            <img src="https://mc-cloudy.com/public/images/design/wavy-line.png" alt="Wavy line" className="img-fluid" draggable="false"/>
                        </div>
                    </div>
                </div>

                <div className="container container-start">
                    <div className="row m-0">
                        <div className="col-12 col-lg-6 mb-4 item">
                            <div className="icon rounded-circle">
                                <i className="fas fa-home m-auto"/>
                            </div>
                            <div className="block-text">
                                <h4>Комунальний код<span>1 етап</span></h4>
                                <p>Для користування сервісом ви повинні мати комунальний код. <a href="/">Натисніть сюди</a>, щоб отримати його.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4 item">
                            <div className="icon rounded-circle">
                                <i className="fas fa-sign-in m-auto"/>
                            </div>
                            <div className="block-text">
                                <h4>Кабінет абонента<span>2 етап</span></h4>
                                <p>Увійдіть в кабінет абонента для оплати комунальних платежів. <a href="/">Натисніть сюди</a>, щоб відкрити кабінет.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0 item">
                            <div className="icon rounded-circle">
                                <i className="fas fa-lightbulb m-auto"/>
                            </div>
                            <div className="block-text">
                                <h4>Показники лічильників<span>3 етап</span></h4>
                                <p>Внесіть у єдиний реєстр <span>Easy Payments</span> актуальну інформацію показників лічильників.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 item">
                            <div className="icon rounded-circle">
                                <i className="fas fa-faucet m-auto"/>
                            </div>
                            <div className="block-text">
                                <h4>Онлайн оплата<span>4 етап</span></h4>
                                <p>Сплатіть комунальні послуги карткою будь-якого банку України або використайте
                                    електронні кошти.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner banner-color info-banner banner-margin">
                    <div className="icon rounded-circle">
                        <i className="far fa-bullhorn m-auto"/>
                    </div>
                    <div className="banner-text">
                        <p className="banner-text-header">Підтримайте українську армію</p>
                        <p className="banner-text-info">Переходьте за посиланням та підтримайте команду «Повернись живим» з картки будь-якого банку України</p>
                    </div>
                    <div className="banner-buttons">
                        <a className="button button-white banner-button" href="https://mc-cloudy.com/discord">Зробити внесок</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <div className="landing-block landing-block-bt landing-block-bb">
                    <div className="container p-0">
                        <div className="landing-wrapper">
                            <div className="row m-0">
                                <div className="col-12 col-lg-6 order-1 d-flex align-items-center">
                                    <div className="block-text">
                                        <div className="row">
                                            <div className="col-11 col-lg-12 mx-auto">
                                                <h2>Сплачувати онлайн - легко<span data-toggle="tooltip" data-placement="top" title="Ми спростили процес нарахування та оплати платежів за житлово–комунальні послуги"><i className="far fa-info-circle icon"/></span></h2>
                                                <p>З метою поліпшення процесу нарахування та оплати населенням платежів за житлово–комунальні та подібні послуги була створена Єдина автоматизована cистема комунальних розрахунків - <b>Easy Payments</b>.</p>
                                                <p>Завдяки цій cистемі кожен має змогу у Єдиному вікні сплачувати за будь–які комунальні послуги: водопостачання, газопостачання, електропостачання, постачання теплової енергії, утримання будинку, сміття, каналізація, ліфт, тощо.</p>
                                                <a href="/">Перейти у кабінет абонента<i className="far fa-external-link-alt icon-margin-left"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 mx-auto col-lg-6 order-2 mt-lg-0">
                                    <img src="https://mc-cloudy.com/public/novacom-lite/image-01.png" alt="Our servers" className="rounded img-fluid" draggable="false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-padding container-lightgray">
                <div className="header-title">
                    <div className="row m-0">
                        <div className="col-11 mx-auto">
                            <h1>Доступні комунальні послуги</h1>
                            <p>Сплачуйте комунальні послуги у наступних категоріях</p>
                        </div>
                        <div className="col-10 col-lg-4 mx-auto">
                            <img src="https://mc-cloudy.com/public/images/design/wavy-line.png" alt="Wavy line" className="img-fluid" draggable="false"/>
                        </div>
                    </div>
                </div>
                <div className="container feature">
                    <div className="row pl-2 pr-2">
                        <div className="col-6 p-1 col-lg-3 mb-2">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/23/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Водопостачання</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3 mb-2">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/1067/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Газопостачання</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3 mb-2">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/29/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Електроенергія</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3 mb-2">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/24/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Теплоенергія</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/86/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>ОСББ та ОСН</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/87/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Сміття</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/89/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Каналізація</p>
                            </div>
                        </div>
                        <div className="col-6 p-1 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-image">
                                    <img src="https://kyivcity.gov.ua/img/item/90/img.svg" alt="Feature Item" draggable="false"/>
                                </div>
                                <p>Ліфт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pb-0">
                <div className="landing-block landing-block-bt">
                    <div className="container p-0">
                        <div className="landing-wrapper">
                            <div className="row m-0">
                                <div className="col-12 col-lg-6 order-1 d-flex align-items-center">
                                    <div className="block-text small">
                                        <div className="row">
                                            <div className="col-11 col-lg-12 mx-auto p-0">
                                                <h2>Потрібна допомога по сайту?</h2>
                                                <p>Якщо при роботі із сервісом автоматизованої cистеми комунальних розрахунків <b>Easy Payments</b> у вас виникли запитання, ви можете звернутися у <a href="/">службу підтримки</a> або задати їх нашим фахівцям за контактами, вказаними нижче.</p>
                                                <p className="mb-1 mb-md-0"><i className="icon-margin-right far fa-envelope"/>easypayments@support.ua</p>
                                                <p><i className="icon-margin-right fas fa-phone-alt"/>+38 (0564) 99–0–204</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 mx-auto col-lg-6 order-2 mt-lg-0">
                                    <img src="https://mc-cloudy.com/public/novacom-lite/image-02.png" alt="Our servers" className="rounded img-fluid" draggable="false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default HomePage;
