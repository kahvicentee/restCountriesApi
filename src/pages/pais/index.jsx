import './index.scss';
import Cabecalho from '../../components/cabecalho';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Pais() {
    const { codigo } = useParams();
    const [pais, setPais] = useState(null);

    async function buscarPais() {
        const resp = await axios.get(`https://restcountries.com/v3.1/alpha/${codigo}`)

        setPais(resp.data[0])
    }

    useEffect(() => {
        buscarPais()
    }, [])

    if (!pais) {
        return <p>Carregando...</p>
    }

    return (
        <div id="pais">
            <Cabecalho />

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}