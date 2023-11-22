import React, { useState } from "react";

const List = () => {
  let [countries, setCountries] = useState([]);

  let [capitalName, setCapitalName] = useState("");

  let handleChange = (e) => {
    setCapitalName(e.target.value);
  };

  //  countries = [
  //     {
  //       country : "india",
  //       capital : "new delhi",
  //     },
  //     {
  //       country : "china",
  //       capital : "beijing",
  //     },
  //     {
  //       country : "pakistan",
  //       capital : "pakistan capital",
  //     },
  //     {
  //       country : "australia",
  //       capital : "autralia capital",
  //     },
  //     {
  //       country : "england",
  //       capital : "england capital",
  //     },
  //     {
  //       country : "new zealand",
  //       capital : "new zealand capital",
  //     },
  //     {
  //       country : "afganistan",
  //       capital : "afganistan capital",
  //     },{
  //       country : "korea",
  //       capital : "korea capital",
  //     },
  //     {
  //       country : "odisha",
  //       capital : "odisha capital",
  //     },
  //     {
  //       country : "sambalpur",
  //       capital : "sambalpur capital",
  //     },
  //     {
  //       country : "china",
  //       capital : "beijing",
  //     },{
  //       country : "bbsr",
  //       capital : "bbsr capital",
  //     },
  //     {
  //       country : "jharsuguda",
  //       capital : "jharsugada capital",
  //     },
  //     {
  //       country : "sargidihi",
  //       capital : "sargidihi capital",
  //     },
  //     {
  //       country : "rusia",
  //       capital : "rusia capital",
  //     },

  //   ];

  return (
    <div>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="capital of country"
            onChange={handleChange}
          ></input>
          <button
            onClick={async () => {
              let res = await fetch(
                `https://restcountries.com/v3.1/capital/${capitalName}`
              );
              let json = await res.json();
              console.log(json);
            }}
          >
            Enter
          </button>
        </form>
      </div>
      <div>
        <ul>
          {countries.map((el, idx) => {
            return (
              <li key={idx}>
                {" "}
                {el.country} ---- {el.capital}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
