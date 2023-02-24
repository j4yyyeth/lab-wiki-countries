import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

const Countries = () => {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
        setCountries(response.data);
        setFetching(false);
      });
  }

  useEffect(() => {
      axios.get(apiURL).then((response) => {
        setCountries(response.data);
        setFetching(false);
      });

   }, []);
  }

export default Countries;