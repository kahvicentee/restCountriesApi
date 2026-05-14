import './index.scss'
import { Link } from 'react-router-dom'

export default function CardPaises(props) {
    return (
        <div id="comp-card-paises">
            <Link to={`/pais/${props.codigo}`}>
                <img src={props.flag} alt="" />

                <div className="texto">
                    <h2>{props.country}</h2>
                    <p>Population: {props.population}</p>
                    <p>Region: {props.region}</p>
                    <p>Capital: {props.capital}</p>
                </div>
            </Link>
        </div>
    )
}