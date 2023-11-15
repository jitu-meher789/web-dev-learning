import React from "react";
import Navbar from "./Navbar.jsx";
import Catatory from "./Catagory.jsx";
import Search from "./Search.jsx";
import Table from "./Table.jsx";

class App extends React.Component {
  state = {
    noOfMovies : 0,
  };

  recieveMoviesData = (number) => {
    this.setState({ noOfMovies: number });
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-2 p-4">
            <Catatory />
          </div>

          <div className="col-10 p-4">
            <div className="row">
              <div className="col-3">
                <Search noOfMovies = {this.state.noOfMovies}/>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <Table sendData = {this.recieveMoviesData}/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
