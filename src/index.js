import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavBar from "./NavBar";
import SurveyComponent from "./SurveyComponent";
import SurveyComponent2 from "./SurveyComponent2";
import SurveyComponent3 from "./SurveyComponent3";
import reportWebVitals from "./reportWebVitals";
import Sample from "./Sample";
import SurveyComponent4 from "./SurveyComponent4";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById("navbarComponent")
);
ReactDOM.render(
  <React.StrictMode>
    {/* <Sample /> */}
    <SurveyComponent3 />
  </React.StrictMode>,
  document.getElementById("root2")
);
ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("surveyContainer")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
