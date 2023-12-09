import React, { useReducer, useState } from "react";


const ACTIONS = {
    INCREAMENT : 'increament',
    DECREAMENT : 'decreament',
    RESET : 'reset',
}
function reducer(count, action) {
    switch(action.type) {
        case ACTIONS.INCREAMENT:
            return count + 1
        case ACTIONS.DECREAMENT:
            return count - 1
        case ACTIONS.RESET:
            return 0
        default : return count
    }
}
const Reducer = () => {
const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
        <span>{count}</span>
        <button onClick={() => dispatch({type:ACTIONS.INCREAMENT})}>+</button>
        <button onClick={() => dispatch({type:ACTIONS.DECREAMENT})}>-</button>
        <button onClick={() => dispatch({type:ACTIONS.RESET})}>Reset</button>
    </div>
  );
};

export default Reducer;
