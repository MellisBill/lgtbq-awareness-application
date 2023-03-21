import React, { useState }  from 'react'
import { PageHeading } from '../components/PageHeading';
import { EmbeddedForm } from '../components/EmbeddedForm';
import { QuestionAnswer } from '../components/QuestionAnswer';
import { formConfig } from '../config/google-forms';
import { ErrorBanner } from '../components/ErrorBanner';
import { FormAPIResponseItem } from '../types/types';
import { useCustomGoogleLogin } from '../hooks/useCustomGoogleLogin';
import { useFormResponses } from '../hooks/useFormResponses';

export const QandA = () => {

    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const login = useCustomGoogleLogin(setToken);
    const [responseItems, error] = useFormResponses(formConfig.responseForm.id, token);

    return <>
        <PageHeading title='Question and Answer'/>
        <ErrorBanner error={error}/>
        <div>
            <button onClick={() => login()}>Login</button>
            { formVisible ? 
                <button onClick={() => setFormVisible(false)}>Minimise form</button> 
            :
                <button onClick={() => setFormVisible(true)}>Ask a question</button>
            }

        </div>
        { formVisible && <EmbeddedForm title='Question form' url={formConfig.questionForm.embedUrl} /> }
        <h2>Answers</h2>
        { responseItems.map(((responseItem: FormAPIResponseItem, i: number) => {
            return <QuestionAnswer key={i} responseItem={responseItem}/>
        })) }
        { responseItems.length === 0 && <p>No items to display</p> }
    </>
}
