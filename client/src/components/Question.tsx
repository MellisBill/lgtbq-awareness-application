import React from 'react'
import { formConfig } from '../config/google-forms'
import { extractAnswer } from '../lib/utils'
import { FormAPIResponseItem } from '../types/types'

export const Question = ({responseItem}: {responseItem: FormAPIResponseItem}) => {

    const question = extractAnswer(responseItem, formConfig.questionForm.questionIds[0])

    return <div className='question'>
        <p>{question}</p>
    </div>
}
