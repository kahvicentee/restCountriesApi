import './index.scss';
import { useState } from 'react';

export default function Cabecalho() {
    const [tema, setTema] = useState(false)

    async function mudarTema() {
        setTema(!tema)
    }

    return (
        <div id="comp-cabecalho">
            <h1>Where in the world?</h1>

            <div className='change-mode' onClick={mudarTema}>
                <i className={tema ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
                <p>Dark Mode</p>
            </div>
        </div>
    )
}