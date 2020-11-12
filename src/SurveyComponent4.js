import React, { Component } from "react";
import OpenDescriptionBox from "./OpenDescriptionBox";
import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";
import Questions from "./Questions";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent4 extends Component {
  constructor() {
    super();
  }

  render() {
    const questions = [
      {
        type: "radiogroup",
        name: "bike",
        title: "What bike are you riding?",
        isRequired: true,
        colCount: 4,
        choices: ["BMW", "Bajaj", "HarleyDavidson", "Yamaha", "Jawa"],
      },
      {
        type: "radiogroup",
        name: "food",
        title: "What food do you like to eat",
        isRequired: true,
        colCount: 4,
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
        colCount: 2,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 2,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 2,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 2,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 2,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 4,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 4,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "radiogroup",
        name: "Phone",
        title: "Which company phone would you like to buy?",
        isRequired: true,
        colCount: 4,
        choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
      },
      {
        type: "matrix",
        name: "survey",
        title: "Answer all the question below, Please",
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
    const surveyQue = new Survey.Model(questions);
    const qList = { Questions };
    const renderDesc = <OpenDescriptionBox />;

    /* const renderQuestion = questions.map((question) => (
      <div>
        <div>{question.title}</div>
        <div>
          {question.choices.map((choice) => (
            <div>{choice}</div>
          ))}
        </div>
      </div>
    )); */

    //{/* <Survey.Survey model={new Survey.Model(qList)} /> */}
    return (
      <div>
        <div className="surveyComponent">
          <table className=" table table-striped ">
            <thead></thead>
            <tbody className=" questionsTab">
              <Survey.Survey model={new Survey.Model(qList)} />
            </tbody>
            <hr />
          </table>
        </div>
      </div>
    );

    /*  <div>
        <table>
          <tr>{qList.questions.name}</tr>
          <tr>{qList.questions}</tr>
        </table>
      </div> */
    /* <div>
        <table className="table table-striped ">
          <thead></thead>
          <tbody className="">
            <Survey.Survey model={new Survey.Model(questions)} />
          </tbody>
        </table>
        <div>
          <h1>Rendering using Map method </h1>
        </div>
        <div>
          {questions.map((question) => {
            <div className="user">{question.name}</div>;
          })}
          <h1>This is inside the div </h1>
        </div>
      </div> */
  }
}

export default SurveyComponent4;

/*
 */
