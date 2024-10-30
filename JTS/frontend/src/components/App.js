import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Homepage";
import DatabasePage from "./DatabasePage";
import CreateItemPage from "./CreateItemPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path="/create" element={<CreateItemPage />} />
            </Routes>
        </Router>
    );
};

const appDiv = document.getElementById("App");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);