import { Link } from "react-router-dom";
import Countries from "./Countries";

const CountriesList = () => {
    Countries.length &&
    Countries.map((country) => {
        return (
            <div>
                <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2code}.png`} alt="flag"></img>
            </div>
        )
    })
}

export default CountriesList;