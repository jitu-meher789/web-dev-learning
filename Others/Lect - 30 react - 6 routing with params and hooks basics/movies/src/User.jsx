import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
class User extends React.Component {
  state = { userData: [] };

  componentDidMount() {
    fetch("/user.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ userData: json });
      });
  }

  render() {
    let reqUser = this.state.userData.find(
      (el) => el.id == this.props.match.params.id
    );

    if (!reqUser) return <div> No user yet</div>;

    return (
      <div>
        <Link to="/">goback</Link>
        <h1>{reqUser.id}</h1>
        <h1>{reqUser.name}</h1>
        <h1>Age : {reqUser.age}</h1>
        <h1>Email : {reqUser.email}</h1>
      </div>
    );
  }
}

export default withRouter(User);
