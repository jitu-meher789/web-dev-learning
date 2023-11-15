import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Showing {this.props.noOfMovies} movies from the list</p>
        <button type="button" className="btn btn-primary mb-4">
          Primary{" "}
        </button>


        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default Search;
