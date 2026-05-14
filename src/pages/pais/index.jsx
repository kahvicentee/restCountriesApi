import './index.scss';
import Cabecalho from '../../components/cabecalho';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Pais({ tema, setTema }) {
    const { codigo } = useParams();
    const [pais, setPais] = useState(null);
    const [fronteiras, setFronteiras] = useState([])

    async function buscarPais() {
        const resp = await axios.get(`https://restcountries.com/v3.1/alpha/${codigo}`)

        const paisEncontrado = resp.data[0]
        setPais(paisEncontrado)

        if (paisEncontrado.borders) {
            const bordersResp = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${paisEncontrado.borders.join(',')}`)
            setFronteiras(bordersResp.data)
        } else {
            setFronteiras([])
        }
    }

    useEffect(() => {
        buscarPais()
    }, [])

    if (!pais) {
        return <p>Carregando...</p>
    }

    return (
        <div id="pais">
            <Cabecalho tema={tema} setTema={setTema}/>

            <div className='info-pais'>
                <Link to='/' className='botao-voltar'>
                    <i class="fa-solid fa-arrow-left"></i>
                    <p>Back</p>
                </Link>


                <div className="pais">
                    <div className='flag'>
                        <img src={pais.flags.svg} alt="" />
                    </div>

                    <div className='info'>
                        <h1>{pais.name.common}</h1>

                        <div className='infos'>
                            <div className='info-1'>
                                <p>Native Name: <span>
                                    {
                                        Object.values(
                                            pais.name.nativeName || {}
                                        )[0]?.common
                                    }
                                </span></p>
                                <p>Population: <span>{pais.population}</span></p>
                                <p>Region: <span>{pais.region}</span></p>
                                <p>Sub Region: <span>{pais.subregion}</span></p>
                                <p>Capital: <span>{pais.capital?.[0]}</span></p>
                            </div>

                            <div className='info-2'>
                                <p>Top Level Domain: <span>{pais.tld?.[0]}</span></p>
                                <p>Currencies: <span>{
                                    Object.values (
                                        pais.currencies || {}
                                    )[0]?.name
                                }</span></p>
                                <p>Languagens: <span>{
                                    Object.values (
                                        pais.languages || {}
                                    ).join(', ')
                                }</span></p>
                            </div>
                        </div>

                        <div className='border-countries'>
                            <p>Border Countries: </p>

                            <div className="fronteiras">
                                {
                                    fronteiras.length > 0
                                    ? fronteiras.map(fronteira => (
                                        <button key={fronteira.cca3}>
                                            {fronteira.name.common}
                                        </button>
                                    ))
                                    : <button>No Border Countries</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}