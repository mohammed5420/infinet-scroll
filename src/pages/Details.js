import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const countryName = location.pathname.split("/")[1];
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getDetails(countryName);
  }, [countryName]);
  const getDetails = async name => {
    const data = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    setDetail(data.data[0]);
    console.log(data.data[0]);
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 mt-4">
      <Link
        className="shadow-md inline-block dark:bg-cusBlue-100 my-4 py-2 px-4 text-gray-900 dark:text-cusBlue-500"
        to="/"
      >
        ⬅ back
      </Link>
      {detail && (
        <div className="container mt-4 flex justify-evenly flex-wrap items-center">
          <div className="max-w-md mb-6 md:mb-8">
            <img className="w-full h-full" src={detail.flag} alt="flag" />
          </div>
          <div className="max-w-md">
            <h3 className="text-lg uppercase font-bold text-gray-900 dark:text-cusBlue-500 mb-4">
              {detail.name}
            </h3>
            <div className="flex mb-4 justify-between items-center">
              <div className="mb-4 mr-4">
                <p className="title">
                  Native Name:
                  <span className="sub-title ">{detail.nativeName}</span>
                </p>
                <p className="title">
                  Population: <span className="sub-title">{detail.population}</span>
                </p>
                <p className="title">
                  Region: <span className="sub-title">{detail.region}</span>
                </p>
                <p className="title">
                  Sub Region: <span className="sub-title">13408</span>
                </p>
              </div>
              <div>
                <p className="title">
                  Top Level Domain: <span className="sub-title">{detail.topLevelDomain[0]}</span>
                </p>
                <p className="title">
                  Currencies: <span className="sub-title">{detail.currencies[0].name}</span>
                </p>
                <p className="title">
                  language: <span className="sub-title">english , fransh</span>
                </p>
              </div>
            </div>
            <p>
              Border Countries:
              {detail.borders.map((border, index) => (
                <span className="inline-block m-2 dark:text-gray-50 py-2 px-2 shadow-md rounded dark:bg-cusBlue-100" key={index}>{border}</span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
