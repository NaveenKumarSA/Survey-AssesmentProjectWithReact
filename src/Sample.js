import React from "react";
import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

export default function Sample() {
  const surveyJSON = {
    title: "Tell us, what technologies do you use?",
    pages: [
      {
        name: "page1",
        questions: [
          {
            type: "radiogroup",
            choices: ["Yes", "No"],
            isRequired: true,
            name: "frameworkUsing",
            title: "Do you use any front-end framework like Bootstrap?",
          },
          {
            type: "checkbox",
            choices: ["Bootstrap", "Foundation"],
            hasOther: true,
            isRequired: true,
            name: "framework",
            title: "What front-end framework do you use?",
            visibleIf: "{frameworkUsing} = 'Yes'",
          },
        ],
      },
      {
        name: "page2",
        questions: [
          {
            type: "radiogroup",
            choices: ["Yes", "No"],
            isRequired: true,
            name: "mvvmUsing",
            title: "Do you use any MVVM framework?",
          },
          {
            type: "checkbox",
            choices: ["AngularJS", "KnockoutJS", "React"],
            hasOther: true,
            isRequired: true,
            name: "mvvm",
            title: "What MVVM framework do you use?",
            visibleIf: "{mvvmUsing} = 'Yes'",
          },
        ],
      },
      {
        name: "page3",
        questions: [
          {
            type: "comment",
            name: "about",
            title:
              "Please tell us about your main requirements for Survey library",
          },
        ],
      },
    ],
  };
  return (
    <div>
      <table className=" table table-striped ">
        <thead></thead>
        <tbody className=" questionsTab">
          <Survey.Survey model={new Survey.Model(surveyJSON)} />
        </tbody>
        <hr />
      </table>
    </div>
  );
}
