import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qList: {
        questions: [
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
            colCount: 4,
            choices: ["Apple", "One-Plus", "Xiomi", "Moto", "Nokia"],
          },
          {
            type: "boolean",
            name: "age",
            title: "Please answer the question",
            label: "Male?",
            isRequired: true,
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
        ],
      },
    };
  }
  render() {
    /* const renderQuestion =(question) */
    //const question = question.map(this.state.qList);

    const renderQuestion = (question, index) => {
      return (
        <tr key={index}>
          {console.log(question)}
          <td> question</td>
          <td></td>
        </tr>
      );
    };
    return this.state.qList.questions.map((qList) => {
      {
        this.state.questions.map((user) => <div className="user">{user}</div>);
      }
    });

    //{/* <Survey.Survey model={new Survey.Model(qList)} /> */}

    /* <React.Fragment>
        <h1>hello</h1>
      </React.Fragment>  */

    /* <table className=" table table-striped col-6">
        <thead>
          <tr className="">
            <th scope="col"> Sl.No</th>
            <th scope="col"> Questoins</th>
          </tr>
        </thead>
        <tbody className="col-6">
          <Survey.Survey model={new Survey.Model(qList)} />
        </tbody>
      </table> */
  }
}

export default SurveyComponent;
