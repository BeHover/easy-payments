import React, {useEffect} from "react";
import "../assets/styles/main.css";
import MetersDataItem from "../components/MetersDataItem";
import LordIcon from "../components/LordIcon";
import NavigateButton from "../components/UI/buttons/NavigateButton";
import {useDispatch, useSelector} from "react-redux";
import {getInvoices as getInvoicesSelector, getUserToken} from "../app/selectors";
import {getInvoices} from "../app/actions";

export default function InvoicesPage() {
	let dispatch = useDispatch();
	// let userToken = useSelector(getUserToken);
	useEffect(
		() => {dispatch(getInvoices("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiMDQ4MGVjMWQtMWVmYy00ZTIwLTg3OTItNjczYmE2NjYwNjc3In0.eVICNB2LQ5QT3LNqmJkS2-FcNsUNFEMHTAzzxfTZzeQ"))}, //TODO: replace with userToken
		[dispatch]
	);

	let invoices = useSelector(getInvoicesSelector);

	if (null === invoices) {
		return <div>...</div>
	}
	console.log(invoices);

    return (
		<section className="bg-light bg-banner">
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="row m-0">
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<h5 className="text-primary">Ваш розумний вибір</h5>
							<h1 className="fw-bold">
								Поточні нарахування
								<LordIcon src="https://cdn.lordicon.com/qhviklyi.json" stroke="70" />
							</h1>
							<p>У таблиці нижче представлена інформація про поточні показники лічильників, дату їх внесення і прораховані системою суми до сплати.</p>
						</div>
						<div className="col-12 col-lg-8">
							<MetersDataItem icon="fas fa-bolt" title="Електроенергія" description="ДТЕК «Енерго»" data="283643" date="28.05.2022" sum="432.45"></MetersDataItem>
							<MetersDataItem icon="fas fa-burn" title="Газопостачання" description="АТ «УКРГАЗ»" data="384723" date="28.05.2022" sum="235.29"></MetersDataItem>
							<MetersDataItem icon="fas fa-tint" title="Водопостачання" description="КП «Водоканал»" data="182742" date="28.05.2022" sum="180.89"></MetersDataItem>
							<MetersDataItem icon="fas fa-fire-alt" title="Теплоенергія" description="АТ «Теплобуд»" data="726382" date="28.05.2022" sum="1435.65"></MetersDataItem>
							<p className="my-3 text-center text-lg-start">Загальна сума до сплати: <span className="text-primary fw-bolder">2284.28₴</span></p>
							<NavigateButton to="/invoices/pay" text="Перейти до сплати" classNames="btn btn-primary col-12 col-lg-auto" />
							<NavigateButton to="/cabinet" text="Повернутися назад" classNames="btn btn-secondary col-12 col-lg-auto ms-3 my-3 my-lg-0" />
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}