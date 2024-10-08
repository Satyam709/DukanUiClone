import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";

import "./index.css";
import TopBar from "./topHeader.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App></App>
  </RecoilRoot>
);
