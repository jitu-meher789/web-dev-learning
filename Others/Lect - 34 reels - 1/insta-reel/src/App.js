import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
 
  let [user, setUser] = useState(null);

  console.log(user);


  return (
    <>
    <Router>
      <Switch>
        <Route path="/login">
          <Login handleUser={setUser} user={user}></Login>
        </Route>
        <Route path="/home">
          <Home user={user}></Home>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
