import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NewsProvoider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvoider>
        <App />
      </NewsProvoider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
