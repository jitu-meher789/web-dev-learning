import { useState, useEffect } from "react";

function App() {
  // jab function rerender hota he tab ye line skip ho jata hai, it works like a state
  let [count, setCount] = useState(0);



  // case 1: it works like componentDidMount, it executes once 
  // it does take dependency array, that is why it executes once
  useEffect(() => {
    console.log("use effect case 1 was executed");
  }, []);



  // case 2: it works like componentDidUpdate(it subsequently executes when component rerenders)
  // it does not take dependency array, that is why it executes like componentDidUpdate
  useEffect(() => {
    console.log("use effect case 2 was executed");
  });


  console.log("component was rendered");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>  
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;

// functional components ka lifecycle nahi hota
