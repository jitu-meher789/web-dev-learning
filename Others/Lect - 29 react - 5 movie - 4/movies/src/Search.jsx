import React from "react";

function Search(props) {
    return (
      <div>
        <p>Showing {props.noOfMovies} movies from the list</p>
        <button type="button" className="btn btn-primary mb-4">
          New{" "}
        </button>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => {
              // console.log(e.currentTarget.value);
              // this.setState({currentSearchString: e.currentTarget.value});
              props.recieveSearchParam(e.currentTarget.value);
            }}
          />
        </div>
      </div>
    );
}

export default Search;
