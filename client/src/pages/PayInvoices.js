import React from "react";
import "../assets/styles/main.css";
import NavigateButton from "../components/UI/buttons/NavigateButton";
import {useSelector} from "react-redux";
import {getInvoices as getInvoicesSelector} from "../app/selectors";

export default function PayInvoicesPage() {
	let invoices = useSelector(getInvoicesSelector);

	if (null === invoices) {
		return <div>...</div>
	}

    return (
		<section className="bg-light">
			<div className="container">
				<div className="row align-items-center justify-content-center min-vh-100">
					<div className="col-12 col-xl-10 col-xxl-8">
						<div className="pay-content">
							<div className="pay-body">
								<h4 className="mb-0"><b style={{color: "#0d6efd"}}>Андрій Дмитрович</b>,</h4>
								<p className="fw-semibold">перевірте інформацію і натисніть на кнопку, щоб перейди до оплати.</p>
								<ul>
									{invoices.invoices.map(invoice =>
										<li><p className="d-flex">{invoice.name}<span className="ms-auto fw-semibold">{invoice.price}₴</span></p></li>
									)}
								</ul>
								<NavigateButton to="/cabinet" text={'Оплатити - '+invoices.totalPrice+'₴'} classNames="btn btn-primary mt-auto fw-semibold" />
							</div>
							<div className="pay-info">
								<h4 className="fw-bold">EasyPayments</h4>
								<p>Гроші будуть автоматично зараховані на рахунки комунальних підприємств.</p>
								<p className="fw-bold">Ми не нараховуємо жодних комісій за використання нашого сервісу.</p>
								<div className="mt-auto">
									<p className="mb-0">Банк, що випустив вашу картку, може стягувати додаткову комісію.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}