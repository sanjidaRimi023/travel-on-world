import React from 'react';

const Country = ({country}) => {
    console.log(country);
    return (
        <div>
            <h2>Name : {country.name.common}</h2>
            <h4>official Name : {country.name.official}</h4>
            <p>Independent : {country.independent ? 'independent country' : 'Not independent country'}</p>
            <p>Population : {country.population}</p>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;