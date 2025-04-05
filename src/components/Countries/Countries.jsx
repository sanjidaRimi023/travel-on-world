import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);

    return (
        <div>
            <h1>Travel on world : {countries.length}</h1>
            {
                countries.map(country => <Country key={country.cca3} country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;