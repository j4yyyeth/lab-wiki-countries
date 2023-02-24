import {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const CountriesDetails = ({countries}) => {

    const [foundCountry, setFoundCountry] = useState(null);

    const { countryCode } = useParams();

    useEffect(() => {             

        let country = countries.find((specificCountry) => {
          return specificCountry.alpha3Code === countryCode;
        })

        setFoundCountry(country)
        
      }, [countryCode]);

    return (
        <div>
            {
                foundCountry ?
                    <div>
                        <h1>{foundCountry.name.common}</h1>
                        <h2>Capital: {foundCountry.capital}</h2>
                        <h3>Area: {foundCountry.area} km^2</h3>
                        <h3>Borders: {foundCountry.borders}</h3>
                    </div>
                    
            
                : <p>Loading...</p>
            }
        </div>
    )
}

export default CountriesDetails;
