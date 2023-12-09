import { useEffect } from "react";
import { auth, signInWithGoogle } from "./firebase";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        let { displayName, email, photoURL } = user;
        props.handleUser({ displayName, email, photoURL });
      } else {
        props.handleUser(user);
      }
    });
  }, []);

  return (
    <div>
      {props.user ? (
        <Redirect to="/home" />
      ) : (
        <button
          onClick={signInWithGoogle}
          type="submit"
          className="btn btn-primary m-4"
        >
          Login With Google
        </button>
      )}

      {/* <button
            onClick={signInWithGoogle}
            type="submit"
            className="btn btn-primary m-4"
          >
            Login With Google
          </button> */}
    </div>
  );
};

export default Login;
