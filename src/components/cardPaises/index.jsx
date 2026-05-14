import './index.scss'
import { Link } from 'react-router-dom'

export default function CardPaises(props) {
    return (
        <div id="comp-card-paises">
            <Link className='comp-card-paises' to={`/pais/${props.codigo}`}>
                <img src={props.flag} alt="" />

                <div className="texto">
                    <h2>{props.country}</h2>
                    <p>Population: <span>{props.population}</span></p>
                    <p>Region: <span>{props.region}</span></p>
                    <p>Capital: <span>{props.capital}</span></p>
                </div>
            </Link>
        </div>
    )
}