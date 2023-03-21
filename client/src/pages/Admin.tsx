import React, { useState } from 'react'
import { EmbeddedForm } from '../components/EmbeddedForm'
import { ErrorBanner } from '../components/ErrorBanner'
import { PageHeading } from '../components/PageHeading'
import { Question } from '../components/Question'
import { formConfig } from '../config/google-forms'
import { useCustomGoogleLogin } from '../hooks/useCustomGoogleLogin'
import { useFormResponses } from '../hooks/useFormResponses'
import { FormAPIResponseItem } from '../types/types'

export const Admin = () => {

    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [token, setToken] = useState("");
    const login = useCustomGoogleLogin(setToken);
    const [responseItems, error] = useFormResponses(formConfig.questionForm.id, token);

    return <>
      <PageHeading title='Admin'/>
      <ErrorBanner error={error}/>
        <div>
            <button onClick={() => login()}>Login</button>
            { formVisible ? 
                <button onClick={() => setFormVisible(false)}>Minimise form</button> 
            :
                <button onClick={() => setFormVisible(true)}>Answer a question</button>
            }

        </div>
        { formVisible && <EmbeddedForm title='Question form' url={formConfig.responseForm.embedUrl} /> }
        <h2>Questions</h2>
        { responseItems.map((responseItem: FormAPIResponseItem, i: number) => {
          return <Question key={i} responseItem={responseItem} />
        })}
        { responseItems.length === 0 && <p>No items to display</p> }
    </>
}
