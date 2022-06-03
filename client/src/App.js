import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register";
import CabinetPage from "./pages/Cabinet";
import MetersDataPage from "./pages/MetersData";
import PaymentPage from "./pages/Payment";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'/login'} element={<LoginPage/>} />
				<Route path={'/register'} element={<RegisterPage/>} />
                <Route path={'/cabinet'} element={<CabinetPage/>} />
                <Route path={'/meters-data'} element={<MetersDataPage/>} />
                <Route path={'/payment'} element={<PaymentPage/>} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;