import { useEffect, useState } from "react";

function App() {
  let [activities, setActivities] = useState([]);

  useEffect(() => {
    // alert("new activity added");

    if(activities.length <= 0) return;
    let body = document.querySelector("body");
    let p = document.createElement("p");
    p.classList.add("flash");
    p.innerText = "New Activity Added";

    body.appendChild(p);

    setTimeout(() => {
      p.remove();
    },2000)

  }, [activities]);
  return (
    <div>
      <button
        onClick={async () => {
          let res = await fetch("https://www.boredapi.com/api/activity/");
          let json = await res.json();
          setActivities([...activities, json.activity]);
        }}
      >
        New Activity
      </button>

      <ul>
        {activities.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
