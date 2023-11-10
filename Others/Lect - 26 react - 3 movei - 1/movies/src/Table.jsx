import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "3.9",
      },

      {
        title: "Dia Hard",
        genre: "Thriller",
        stock: "1",
        rate: "2.5",
      },

      {
        title: "Spider man 3",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },

      {
        title: "The Nunes",
        genre: "Horror",
        stock: "5",
        rate: "3.5",
      },
      {
        title: "Sex in the city",
        genre: "Romance",
        stock: "3",
        rate: "1.5",
      },

      {
        title: "Dianoser",
        genre: "Horror",
        stock: "1",
        rate: "1.5",
      },
    ],
  };

  render() {
    let numberOfPage = Math.ceil(this.state.allMovies.length / 5);
    let arr = [];
    for (let i = 1; i <= numberOfPage; i++) {
      arr.push(i);
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.allMovies.map((el) => {
              return (
                <tr>
                  <td>{el.title}</td>
                  <td>{el.genre}</td>
                  <td>{el.stock}</td>
                  <td>{el.rate}</td>
                  <td>Lke</td>
                  <td>
                    {" "}
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>

            {arr.map(function (el) {
              return (
                <li className="page-item">
                  <a className="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            {/* <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li> */}
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
