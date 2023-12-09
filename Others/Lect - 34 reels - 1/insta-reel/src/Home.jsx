import { Redirect } from "react-router-dom";
import { auth } from "./firebase";

const Home = (props) => {
  console.log(props.user);
  return (
    <div>
      {props.user ? (
        <>
          <img
            style={{ width: "100px", height: "100px" }}
            src={props.user.photoURL}
            alt="profile pic"
          />
          <h1>Name : {props.user.displayName}</h1>
          <p>Emalil : {props.user.email}</p>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <Redirect to="/login" />
      )}
      
      {/* <img style={{width:"100px", height:"100px"}} src={props.user.photoURL} alt="profile pic" />
      <h1>Name : {props.user.displayName}</h1>

      <p>Emalil : {props.user.email}</p>
      <button onClick={() => {
        auth.signOut();
      }}>Sign Out</button> */}
    </div>
  );
};

export default Home;
