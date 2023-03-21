import React from 'react'
import { formConfig } from '../config/google-forms';
import { extractAnswer } from '../lib/utils';
import { FormAPIResponseItem } from '../types/types';

export const QuestionAnswer = ({responseItem}: {responseItem: FormAPIResponseItem}) => {

  const question = extractAnswer(responseItem, formConfig.responseForm.questionIds[0])
  const answer = extractAnswer(responseItem, formConfig.responseForm.questionIds[1])

  return (
    <div className='question-response'>
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
    </div>
  )
}
