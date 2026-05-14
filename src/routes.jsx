import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Pais from "./pages/pais";

export default function Navigation({tema, setTema}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage tema={tema} setTema={setTema}/>} />
                <Route path="/pais/:codigo" element={<Pais tema={tema} setTema={setTema}/>} />
            </Routes>
        </BrowserRouter>
    )
}