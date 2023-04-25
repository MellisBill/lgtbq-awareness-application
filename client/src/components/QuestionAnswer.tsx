import React from "react";
import { formConfig } from "../config/google-forms";
import { extractAnswer, extractTags } from "../lib/utils";
import { FormAPIResponseItem } from "../types/types";

export const QuestionAnswer = ({responseItem} : {responseItem: FormAPIResponseItem}) => {
  //export const QuestionAnswer = () => {
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />;

  const question = extractAnswer(
    responseItem,
    formConfig.responseForm.questionIds[0]
  );
  const answer = extractAnswer(
    responseItem,
    formConfig.responseForm.questionIds[1]
  );
  const tags = extractTags(
    extractAnswer(responseItem, formConfig.responseForm.questionIds[2])
  );

  return (
    <div className="question-response">
      <div className="question-response-asker-container">
        <p>
          <span className="material-symbols-outlined">person</span>
          <div className="question-response-asker">Anonymous</div>
        </p>
      </div>
      <p className="question-response-question">
        <b>{question}</b>
      </p>
      <p></p>
      {tags.map((tag, i) => {
        return <p className="question-response-tags">{tag}</p>;
      })}
      <div className="question-response-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};
