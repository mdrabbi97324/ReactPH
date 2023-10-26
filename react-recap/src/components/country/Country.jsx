import { useState } from 'react';
import './Country.css'
export default function Country({country}){
    console.log(country)
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited)
    }
    const {name, population, flags, cca3} = country;
    return (
        <div  className={`country ${visited} ? 'visited' : 'non-visit'`}>
            <img src={flags.png} alt="" />
            <p>Name : {name.common}</p>
            <p>Population : {population}</p>
            <p>Key or cca3 : {cca3}</p>
            <button style={{marginRight: '5px'}} onClick={handleClick}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I am not visited but going in future'}
        </div>
    )
}