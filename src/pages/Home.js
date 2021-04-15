import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import axios from "axios";
import Inputs from "../components/Inputs";


const Home = () => {
  const [countaries, setCountaries] = useState(null);
  const [fillteredCountaries, setFillteredCountaries] = useState(null);
  useEffect(() => {
    getData();
  }, []);


  //fetch all the countries
  const getData = async () => {
    const data = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(data);
    setCountaries(data.data);
    setFillteredCountaries(data.data);
  };

  return (
    <>
    <Inputs countaries={countaries} setCountaries ={setCountaries} fillteredCountaries={fillteredCountaries} setFillteredCountaries={setFillteredCountaries}/>
    <div
      className="  px-4 sm:px-8 md:px-16 grid  gap-6 mt-12"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
      
      {fillteredCountaries && (fillteredCountaries.map(country => <Country data={country} key={country.alpha2Code}/>))}
    </div>
    </>
  );
};

export default Home;
