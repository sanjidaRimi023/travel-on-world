import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [countCountry, setCountCountry] = useState([]);

  const showVisitCountry = (country) => {
    console.log("visit some country" , country.name.common);
  };

  return (
    <div>
      <h1>Travel on world : {countries.length}</h1>
      <h2>The number of countries traveled is : {countCountry}</h2>

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
