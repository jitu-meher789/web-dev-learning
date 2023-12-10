import { useDispatch, useSelector } from "react-redux";
import {
  increamentActionCreater,
  decrementActionCreater,
  loginActionCreater,
  logoutActionCreater,
} from "./redux/actions";
function App() {
  /*useSelector hook ko ek function deta  hai jisko state milti hai jo ki redux store me stored he, 
  and then is function ke andar se we can manupulate state and return*/

  let countState = useSelector((state) => {
    return state.count;
  });

  let authState = useSelector((state) => {
    return state.auth;
  });

  // ye ek function deta he
  let dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decrementActionCreater());
        }}
      >
        -
      </button>
      <p>{countState}</p>
      <button
        onClick={() => {
          dispatch(increamentActionCreater(3));
        }}
      >
        +
      </button>
      <div>
        {authState ?  (<button onClick={() => {dispatch(logoutActionCreater());}}>logout</button>) : (<button onClick={() => {dispatch(loginActionCreater());}}>login</button>)}

        

        <p>{authState ? "some private text" : ""}</p>
      </div>
    </div>
  );
}

export default App;
