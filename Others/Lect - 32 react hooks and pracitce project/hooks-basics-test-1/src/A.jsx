import { createContext, useState } from "react";
import B from "./B";

// lamen terms - context ek jagah he, to store some
//  data to pass to child props in any level of component tree

let someContext = createContext();
let someContext2 = createContext();

function A() {
  let [name, setName] = useState("jack");
  let [lName, setLName] = useState("Ryan");

  return (
    <someContext.Provider value={name}>
      <someContext2.Provider value={lName}>
        <B />
      </someContext2.Provider>
    </someContext.Provider>
  );
}

export default A;
export { someContext };
export { someContext2};
