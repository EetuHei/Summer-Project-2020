import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Results from "./components/Results";

const Countries = () => {
  const [countries, setCountries] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => setFilter(e.target.value);
  // funcionality for show button to set the filter to be the selected country
  const showCountry = (selectedCountry) => setFilter(selectedCountry);

  // copy of countries array and filter by user input
  let filterCountries = [...countries];
  if (filter)
    filterCountries = filterCountries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );

  // hook to fetch data from api
  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      console.log("promise fullified");
      setCountries(res.data);
    });
  }, []);
  console.log("render", countries.length, "data");

  return (
    <div style={{ padding: "5px" }}>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <Results countries={filterCountries} showCountry={showCountry} />
    </div>
  );
};

export default Countries;
