import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = () => {

    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2>Total Countries : {country.length}</h2>
            <div className={'countries-container'}>
                {
                    country.map(country => <Country key={country.cca3} country = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;