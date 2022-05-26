require("core-js/stable");
require("regenerator-runtime/runtime");

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Welcome from "./views/welcome.jsx";
import Nav from "./components/nav.jsx";

ReactDOM.createRoot(
    document.getElementById("app")
).render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dist/" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);