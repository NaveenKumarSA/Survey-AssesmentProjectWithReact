import React, { Component, useState } from "react";

import * as Survey from "survey-react";
import "survey-react/modern.css";
import "./index.css";
import Button from "react-bootstrap";
import OpenDescriptionBox from "./OpenDescriptionBox";
import YetToDevelop from "./YetToDevelop";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent3 extends Component {
  constructor() {
    super();
    this.state = {
      bool: false,
      goToAssessment: false,
      devInProgress: false,
    };
  }
  render() {
    const openDescBox = () => {
      if (this.state.bool === false) this.setState({ bool: true });
      else this.setState({ bool: false });
    };
    const takeAssessment = () => {
      this.state.goToAssessment === true
        ? this.setState({ goToAssessment: false })
        : this.setState({ goToAssessment: true });
    };
    const yetToDevelop = () => {
      this.state.devInProgress === false
        ? this.setState({ devInProgress: true })
        : this.setState({ devInProgress: false });
    };
    const questions = [
      {
        type: "radiogroup",
        name: "bike",
        title: "What bike are you riding?",
        isRequired: true,
        colCount: 1,
        choices: ["BMW", "Bajaj", "HarleyDavidson", "Yamaha", "Jawa"],
      },
      {
        type: "radiogroup",
        name: "food",
        title: "What food do you like to eat",
        isRequired: true,
        colCount: 1,
        choices: [
          "Biriyani",
          "Fried-Rice",
          "paulou",
          "Veg-Biriyani",
          "Curd-Rice",
        ],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 1,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 1,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "matrix",
        name: "survey",
        title: "Answer all the question below, Please",
        /* minWidth: "620px",
         maxWidth: "720px",*/
        /*   width: "600px", */
        className: "col",
        columns: [
          { value: 1, text: "Strongly Agree" },
          { value: 2, text: " Agree " },
          { value: 3, text: " Neutral " },
          { value: 4, text: "disagree" },
          { value: 5, text: "Strongly disagree" },
        ],
        rows: [
          { value: 1, text: "Your house is comfortable?" },
          { value: 2, text: "You can afford flight ticket to bankog?" },
          { value: 3, text: "Can you spend lavishly today?" },
          { value: 4, text: "Will you able to finish the work by today?" },
        ],
      },
      {
        type: "rating",
        name: "satisfaction",
        title: "How satisfied are you with this Product?",
        minRateDescription: "Not Satisfied",
        maxRateDescription: "Completely satisfied",
      },
    ];
    //const surveyQue = new Survey.Model(questions);

    const qList = { questions };

    return (
      <div className="surveyComponent">
        {this.state.devInProgress && <YetToDevelop />}
        <div className="ResponseAndBackButtonDiv">
          <span className="responseButton m-3" onClick={yetToDevelop}>
            Edit Responses
          </span>
          <span className="responseButton" onClick={yetToDevelop}>
            {/* &#8617; */}Back
          </span>
        </div>
        <hr></hr>
        <div className="descriptionTab">
          <button className="btn-darkprimary">Sample</button>
          {/* <Button  onClick={openDescBox}>
            Description
          </Button> */}
          <span className="" onClick={takeAssessment}>
            {" "}
            Take Assessment{" "}
          </span>
        </div>
        <div>{this.state.bool === true && <OpenDescriptionBox />}</div>
        <table className="quistionBlock table table-striped table-responsive">
          <tbody className=" questionsTab">
            {this.state.goToAssessment && (
              <Survey.Survey model={new Survey.Model(qList)} />
            )}
          </tbody>
          <hr />
        </table>
      </div>
    );
  }
}

export default SurveyComponent3;

/*
 */
