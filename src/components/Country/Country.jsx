import React, { useState } from 'react';
import './Country.css'

const Country = ({country , showVisitCountry}) => {

    const [visited , setVisited] = useState(false);
    // console.log(showVisitCountry);

    

    const handleVisit = () =>{
        // if(visited === true){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
        setVisited(!visited);
        showVisitCountry(country);
    }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>Name : {country.name.common}</h2>
            <h4>official Name : {country.name.official}</h4>
            <p>Independent : {country.independent ? 'independent country' : 'Not independent country'}</p>
            <p>Population : {country.population}</p>
            <img src={country.flags?.png} alt="" />
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
           
        </div>
    );
};

export default Country;