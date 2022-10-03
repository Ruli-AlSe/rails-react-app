import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  let rootDiv = document.createElement("div");
  rootDiv.id = "root";
  document.body.appendChild(rootDiv);
  const root = ReactDOM.createRoot(rootDiv);

  root.render(<App />);
});
