import React from "react";
import Navbar from "./Navbar.jsx";
import Catatory from "./Catagory.jsx";
import Search from "./Search.jsx";
import Table from "./Table.jsx";

class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString: "",
    currGenre: "All Genre",
  };

  recieveMoviesData = (number) => {
    this.setState({ noOfMovies: number });
  };

  recieveSearchParam = (param) => {
    this.setState({ searchString: param });
  };

  recieveCurrGenre = (genre) => {
    this.setState({ currGenre: genre });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-2 p-4">
            <Catatory recieveCurrGenre={this.recieveCurrGenre} />
          </div>

          <div className="col-10 p-4">
            <div className="row">
              <div className="col-3">
                <Search
                  noOfMovies={this.state.noOfMovies}
                  recieveSearchParam={this.recieveSearchParam}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <Table
                  sendData={this.recieveMoviesData}
                  searchString={this.state.searchString}
                  currGenre = {this.state.currGenre}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
