import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { DragDropStore } from "./stores";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={DragDropStore}><App /></Provider>,
  document.getElementById("root")
);
registerServiceWorker();
