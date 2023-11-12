import React from "react";
import Navbar from "./Navbar.jsx";
import Catatory from "./Catagory.jsx";
import Search from "./Search.jsx";
import Table from "./Table.jsx";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-2 p-4">
          <Catatory />
        </div> 

        <div className="col-10 p-4" >
          <div className="row">
              <div className="col-3">
                <Search />
              </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
