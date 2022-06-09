import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cabinet from "../pages/Cabinet";
import MetersData from "../pages/MetersData";
import Invoices from "../pages/Invoices";
import PayInvoices from "../pages/PayInvoices";
import Error from "../pages/Error";
import Services from "../pages/Services";

export const routes = [
    {path: '/', element: <Home/>, exact: false},
    {path: '/register', element: <Register/>, exact: false},
    {path: '/login', element: <Login/>, exact: false},
    {path: '/cabinet', element: <Cabinet/>, exact: false},
    {path: '/meters-data', element: <MetersData/>, exact: false},
    {path: '/invoices', element: <Invoices/>, exact: false},
    {path: '/invoices/pay', element: <PayInvoices/>, exact: false},
    {path: '/admin/services', element: <Services/>, exact: false},
    {path: '*', element: <Error/>, exact: false}
]