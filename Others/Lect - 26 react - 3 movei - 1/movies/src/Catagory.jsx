import React from "react";


class Catagory extends React.Component {
  state = {
    allGenres: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
  };

  render() {
    return (
      <ul className="list-group">

        {
            this.state.allGenres.map((el) => {
                return (
                    <li className="list-group-item" key={el}>{el}</li>
                );
            })
        }

      </ul>
    );
  }
}


export default Catagory;