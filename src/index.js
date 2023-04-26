import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Control from "./Control";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Sound_bar from "./Sound_bar";
import Play_ground from "./Play_ground";
import Timeline from "./Timeline";
import Footer from "./Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// if (checkHasBars4) {
//   for (let i = 0; i < 4; i++) {
//     indexOfBar === String(i) &&
//       setTimelineBox(Bars64_api.slice(0 * i, 16 * (i + 1)));
//   }
// } else if (checkHasBars8) {
//   for (let i = 0; i < 8; i++) {
//     indexOfBar === String(i) &&
//       setTimelineBox(Bars64_api.slice(0 * i, 8 * (i + 1)));
//   }
// } else if (checkHasBars16) {
//   for (let i = 0; i < 16; i++) {
//     indexOfBar === String(i) &&
//       setTimelineBox(Bars64_api.slice(0 * i, 4 * (i + 1)));
//   }
// } else if (checkHasBars32) {
//   indexOfBar === "0" && setTimelineBox(Bars64_api.slice(0, 32));
// } else if (checkHasBars64) {
//   indexOfBar === "0" && setTimelineBox(Bars64_api.slice(0, 32));
// }
