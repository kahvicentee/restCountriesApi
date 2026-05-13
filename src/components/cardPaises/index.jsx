import './index.scss'

export default function CardPaises(props) {
    return (
        <div id="comp-card-paises">
            <img src={props.flag} alt="" />

            <div className="texto">
                <h2>{props.country}</h2>
                <p>Population: {props.population}</p>
                <p>Region: {props.region}</p>
                <p>Capital: {props.capital}</p>
            </div>
        </div>
    )
}