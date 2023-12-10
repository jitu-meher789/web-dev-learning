import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "./redux";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

let store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
