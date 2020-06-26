import React from "react";
import Weather from "./Weather"

const Results = ({ countries, showCountry }) => {

  const countryList = countries.map((country) => (
    <p key={country.numericCode}>
      {country.name}
      <button onClick={() => showCountry(country.name)}>show</button>
    </p>
  ));

  if (countries.length === 1) {
    const { name, capital, population, languages, flag } = countries[0];
    const languageList = languages.map((language) => (
      <li key={language.iso639_2}>{language.name}</li>
    ));

    return (
      <>
        <h1>{name}</h1>
        <div>capital {capital}</div>
        <div>population {population} </div>
        <h3>Spoken languages</h3>
        <ul>{languageList}</ul>
        <img src={flag} height="100" width="150" />
        <Weather capital={capital} />
      </>
    );
  } else {
    return (
      <div >
        {countries.length > 10
          ? "Too many matches, specify another filter"
          : countryList}
      </div>
    );
  }
};

export default Results;
