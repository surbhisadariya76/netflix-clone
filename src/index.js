import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { Provider } from "react-redux";
import AppStore from "./components/AppStore/AppStore.js";
import Layout from "./components/Layout/Layout.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
