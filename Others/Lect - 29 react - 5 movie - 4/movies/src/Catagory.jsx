import React from "react";

class Catagory extends React.Component {
  state = {
    allGenres: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
    // currGenre: "All Genre",
  };

  async componentDidMount() {
    // fetch("/genre").then(function(res) {
    //   return res.json()
    // }).then((jso) =>{
    //   console.log(json);
    //   this.setState({allGenres:jso});
    // })

    let data = await fetch("/genre");
    let json = await data.json();
    this.setState({ allGenres: json });
  }

  render() {
    return (
      <ul className="list-group">
        <li
          className="list-group-item"
          key="allGenre"
          onClick={() => {
            this.props.recieveCurrGenre("All Genre");
            // this.setState({ currGenre: "All Genre" });
          }}
        >
          All Genres
        </li>

        {this.state.allGenres.map((el) => {
          return (
            <li
              className="list-group-item"
              key={el._id}
              onClick={() => {
                this.props.recieveCurrGenre(el.name);

                // this.setState({ currGenre: el.name });
              }}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Catagory;
