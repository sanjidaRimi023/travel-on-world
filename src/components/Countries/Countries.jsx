import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [countCountry, setCountCountry] = useState([]);
  const countries = use(countriesPromise);

  const showVisitCountry = (country) => {
    console.log("visit some country", country);
    const newVisitCountry = [...countCountry, country];
    setCountCountry(newVisitCountry);
  };

  return (
    <div>
      <h1>Travel on world : {countries.length}</h1>
      <h2>The number of countries traveled is :{countCountry.length}</h2>
      <ol>
        {
          countCountry.map(country => <li>
            {country.name.common}
          </li>)
        }
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            showVisitCountry={showVisitCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
