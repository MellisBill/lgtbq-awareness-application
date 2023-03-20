import React from 'react'
import { formConfig } from '../config/google-forms';

export const QuestionResponse = ({response}: {response: any}) => {

  const question = response[formConfig.responseForm.questionIds[0]]['textAnswers']['answers'][0]['value'];
  const answer = response[formConfig.responseForm.questionIds[1]]['textAnswers']['answers'][0]['value'];

  return (
    <div className='question-response'>
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
    </div>
  )
}
