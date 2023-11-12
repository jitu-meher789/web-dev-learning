import React from "react";

class Catagory extends React.Component {
  state = {
    allGenres: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
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
        {this.state.allGenres.map((el) => {
          return (
            <li className="list-group-item" key={el._id}>
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Catagory;
