import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDom 이 App을 render해준다.
// id가 root인 곳에 출력해준다. App을.

serviceWorker.unregister();
