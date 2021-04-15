import React , {useState , useContext} from "react";
import axios from "axios";
const Inputs = ({countaries , setCountaries , setFillteredCountaries}) => {
  const [searchCountry , setSearchCountry] = useState('');
  const handelChange = e => {
    setSearchCountry(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      const data = await axios.get(`https://restcountries.eu/rest/v2/name/${searchCountry}`);
      setCountaries(data.data);
      setFillteredCountaries(data.data);
    };
    getData();
    setSearchCountry("");
  }
  const handelChangeRegion = (e) => {
    const currentRegoin = e.target.value;
    if(currentRegoin != "All"){
      let newData = countaries.filter(country => country.region === currentRegoin);
      setFillteredCountaries(newData);
    } else {
      setFillteredCountaries(countaries);
    }
  }
  return (
    <div className="flex justify-between items-center px-2 md:px-16 pt-12">
      <form className="dark:bg-cusBlue-100 py-3 mr-2 px-5 rounded-md shadow-md w-max" onSubmit={handelSubmit}>
        <input onChange={handelChange} value={searchCountry} className="dark:bg-transparent  px-6 ml-4 focus:outline-none" type="text" placeholder="Search for a country..." />
      </form>
      <select className="py-3 px-5 shadow-md rounded-md dark:bg-transparentfocus:outline-none" name="" id="" onChange={(e) => {
        handelChangeRegion(e);
      }}>
      <option value="All">all</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Inputs;
