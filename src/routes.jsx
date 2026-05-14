import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Pais from "./pages/pais";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pais/:codigo" element={<Pais />} />
            </Routes>
        </BrowserRouter>
    )
}