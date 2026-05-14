import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CardPaises from '../../components/cardPaises';
import axios from 'axios';
import { useEffect, useState } from 'react'

export default function LandingPage({ tema, setTema }) {
    const [countries, setCountries] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [regiao, setRegiao] = useState('')

    async function buscarPaises() {
        const resp = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3')

        setCountries(resp.data)
    }

    async function buscarPais() {
        const resp = await axios.get(`https://restcountries.com/v3.1/name/${pesquisa}`)

        setCountries(resp.data)
    }

    async function buscaPorRegiao(regiaoSelecionada) {
        setRegiao(regiaoSelecionada)

        if (regiaoSelecionada === '') {
            buscarPaises()
            return
        }

        const resp = await axios.get(`https://restcountries.com/v3.1/region/${regiaoSelecionada}`)
        setCountries(resp.data)
    }

    useEffect(() => {
        buscarPaises()
    }, [])
    
    return (
        <div id="landing-page">
            <Cabecalho tema={tema} setTema={setTema} />

            <div className="pesquisa">
                <div className="barra">
                    <i class="fa-solid fa-magnifying-glass barra-icone"></i>
                    <input type="text" value={pesquisa} onChange={a => setPesquisa(a.target.value)} placeholder='Search for a country...'/>
                </div>

                <div className="filtro">
                    <select value={regiao} onChange={e => buscaPorRegiao(e.target.value)}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

            <div className="paises">
                {countries.map(country => (
                    <CardPaises 
                        key={country.cca3}
                        codigo={country.cca3}
                        flag={country.flags.svg}
                        country={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital?.[0]}
                    />
                ))}
            </div>
        </div>
    )
}