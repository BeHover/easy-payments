import React, {useEffect} from "react";
import "../assets/styles/main.css";
import NavigateButton from "../components/UI/buttons/NavigateButton";
import {useDispatch, useSelector} from "react-redux";
import {getInvoices as getInvoicesSelector} from "../app/selectors";
import {getInvoices, loginUser, payForInvoices} from "../app/actions";
import {getUserToken} from "../utils";

export default function PayInvoicesPage() {
	let dispatch = useDispatch();
	let token = getUserToken()
	useEffect(
		() => {dispatch(getInvoices(token))},
		[dispatch]
	);

	let invoices = useSelector(getInvoicesSelector);

	if (null === invoices) {
		return <div>...</div>
	}

	console.log(invoices.invoices);
	let invoicesIds = [];
	for (const invoice of invoices.invoices) {
		invoicesIds.push(invoice.id)
	}
	console.log(invoicesIds);

	let submitPayment = (event) => {
		event.preventDefault();
		dispatch(payForInvoices(
			"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiMDQ4MGVjMWQtMWVmYy00ZTIwLTg3OTItNjczYmE2NjYwNjc3In0.eVICNB2LQ5QT3LNqmJkS2-FcNsUNFEMHTAzzxfTZzeQ",
			invoicesIds
		));
	}

    return (
		<section className="bg-light">
			<div className="container">
				<div className="row align-items-center justify-content-center min-vh-100">
					<div className="col-12 col-xl-10 col-xxl-8">
						<div className="pay-content">
							<div className="pay-body">
								<p className="fw-semibold">перевірте інформацію і натисніть на кнопку, щоб перейди до оплати.</p>
								<ul>
									{invoices.invoices.map(invoice =>
										<li><p className="d-flex">{invoice.name}<span className="ms-auto fw-semibold">{invoice.price}₴</span></p></li>
									)}
								</ul>
								<button type="button" onClick={submitPayment} className="btn btn-primary mt-auto fw-semibold">
									{'Оплатити - '+invoices.totalPrice+'₴'}
								</button>
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