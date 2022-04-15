import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import HomePage from "./pages/Home"
import FAQPage from "./pages/FAQ"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'/faq'} element={<FAQPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;