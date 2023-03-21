import React from 'react'
import { formConfig } from '../config/google-forms'
import { extractAnswer } from '../lib/utils'
import { FormAPIResponseItem } from '../types/types'

export const Question = ({responseItem}: {responseItem: FormAPIResponseItem}) => {

    const _question = extractAnswer(responseItem, formConfig.questionForm.questionIds[0])

    return <>
        <p>Question: {_question}</p>
    </>
}
