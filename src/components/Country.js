import React from "react";
import { Link } from "react-router-dom";
const Country = ({ data }) => {
  return (
    <Link to={`/${data.name}`}>
      <div className="dark:bg-cusBlue-100 bg-cusBlue-600 shadow-xl rounded-lg overflow-hidden">
        <img
          src={data.flag}
          alt={`${data.name} flag`}
          className="block w-full h-44"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl dark:text-cusBlue-500 text-cusBlue-300 capitalize mb-4">
            {data.name}
          </h2>
          <h4 className="capitalize dark:text-cusBlue-500 font-medium mb-1 text-cusBlue-300">
            Population:
            <span className="dark:text-cusBlue-500 inline-block ml-1 font-light text-cusBlue-200">
              {data.population}
            </span>
          </h4>
          <h4 className="capitalize dark:text-cusBlue-500 font-medium mb-1 text-cusBlue-200">
            Region:
            <span className="dark:text-cusBlue-500 inline-block ml-1 font-light text-cusBlue-200">
              {data.region}
            </span>
          </h4>
          <h4 className="capitalize dark:text-cusBlue-500 font-medium mb-1 text-cusBlue-200">
            Capital:
            <span className="dark:text-cusBlue-500 inline-block ml-1 font-light text-cusBlue-200">
              {data.capital}
            </span>
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Country;
