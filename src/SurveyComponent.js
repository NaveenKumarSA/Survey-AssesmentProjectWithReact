import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
  }
  render() {
    const qList = {
      questions: [
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
        /*  {
          type: "boolean",
          name: "age",
          title: "Please answer the question",
          label: "Male?",
          isRequired: true,
        }, */
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
            {
              value: 1,
              text:
                "My remote working area has the space and amenities to help me be productive.",
            },
            {
              value: 2,
              text:
                " It is easy to remain focused on my tasks and responsibilities when working remotely.",
            },
            {
              value: 3,
              text: " I feel productive and proud of my job most days.",
            },
            {
              value: 4,
              text:
                "I find myself responding to emails all hours of the day just to keep up with the increase in email communication.",
            },
          ],
        },
        {
          type: "matrix",
          name: "survey1",
          title: "Answer all the question below, Please",
          columns: [
            { value: 1, text: "Strongly Agree" },
            { value: 2, text: " Agree " },
            { value: 3, text: " Neutral " },
            { value: 4, text: "disagree" },
            { value: 5, text: "Strongly disagree" },
          ],
          rows: [
            {
              value: 1,
              text:
                "I have all the technology and software I need to succeed at my job remotely.",
            },
            {
              value: 2,
              text: "We belive you are happy with the Office culture.",
            },
            {
              value: 3,
              text:
                "My internet speed and connection reliability allow me to job without frustration.",
            },
            {
              value: 4,
              text: "Will you able to finish the given work by today.",
            },
          ],
        },
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with this Product?",
          minRateDescription: "Not Satisfied",
          maxRateDescription: "Completely satisfied",
        },
      ],
    };
    /* const renderQuestion = question; */

    //{/* <Survey.Survey model={new Survey.Model(qList)} /> */}
    return (
      /*  <div>
        <table>
          <tr>{qList.questions.name}</tr>
          <tr>{qList.questions}</tr>
        </table>
      </div> */
      <div className="surveyComponent">
        <div className="descriptionTab">
          <span className="descriptionButton" onClick="openDescBox()">
            Description
          </span>
        </div>
        <table className=" table table-striped ">
          <thead></thead>
          <tbody className=" questionsTab">
            <Survey.Survey model={new Survey.Model(qList)} />
          </tbody>
          <hr />
        </table>
      </div>
    );
  }
}

export default SurveyComponent;
