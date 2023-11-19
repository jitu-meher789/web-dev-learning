import { useEffect, useState } from "react";
import Form from ".";
import Display from "./Display";

function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [theme, setThemes] = useState("");

  useEffect(() => {
    console.log("case 3");
    // alert("theme has been changed")
  },[theme]);
  return (
    <div className="my-container">
      <Display name={name} email={email} phone={phone} theme={theme} />
      <Form
        theme={theme} 
        handleName={setName}
        handleEmail={setEmail}
        handlePhone={setPhone}
        handleTheme={setThemes}
      />
    </div>
  );
}

export default App;
