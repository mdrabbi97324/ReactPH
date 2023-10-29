import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = () => {

    const [country, setCountry] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    
    return (
        <div>
            {/* Show Flag of visited country */}
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img key={country.ccn3} src={flag}></img>)
                }

            </div>
            <div>
                <h4>Visited Countries Name : {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <h2>Total Countries : {country.length}</h2>
            <div className={'countries-container'}>
                {
                    country.map(country => <Country key={country.cca3} handleVisitedFlags={handleVisitedFlags} handleVisitedCountry= {handleVisitedCountry} country = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;