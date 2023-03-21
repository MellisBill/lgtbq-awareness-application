import React, { useEffect, useState }  from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { scopes } from '../config/google-oauth';
import { PageHeading } from '../components/PageHeading';
import { EmbeddedForm } from '../components/EmbeddedForm';
import { QuestionResponse } from '../components/QuestionResponse';
import { formConfig } from '../config/google-forms';
import { getFormResponses } from '../lib/google-forms';
import { errorCodes } from '../data/error-codes';
import { ErrorBanner } from '../components/ErrorBanner';
import { Error } from '../types/types';

export const QandA = () => {

    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [responses, setResponses] = useState([]);
    const [showError, setShowError] = useState<boolean>(true);
    const [error, setError] = useState<Error>({errorMessage: "", errorType: ""});

    // Fetch questions and answers from Google Forms API;
    useEffect(() => {
        getFormResponses(formConfig.responseForm.id)
            .then(res => {
                if (res.error) {
                    setError(errorCodes[res.error]);
                    setShowError(true);
                    setResponses([]);
                } else {
                    setError({errorMessage: "", errorType: ""})
                    setShowError(false);
                    const data = res.body.responses.map((response: any) => response.answers);
                    setResponses(data);
                }
            })
    }, []);

    // Function to log in to Google 
    const login = useGoogleLogin({
        onSuccess: (res) => {
            localStorage.setItem('oauth-token', res.access_token);
        },
        onError: (error) => {
            console.error('Login Failed: ', error);
            localStorage.removeItem('oauth-token');
        },
        scope: scopes
    });

    return <>
        <PageHeading title='Question and Answer'/>
        { showError && <ErrorBanner error={error}/> }
        <div>
            <button onClick={() => login()}>Login</button>
            { formVisible ? 
                <button onClick={() => setFormVisible(false)}>Minimise form</button> 
            :
                <button onClick={() => setFormVisible(true)}>Ask a question</button>
            }

        </div>
        { formVisible && <EmbeddedForm title='Question form' url={formConfig.responseForm.embedUrl} /> }
        { responses.map(((response, i) => {
            return <QuestionResponse key={i} response={response}/>
        }))}
    </>
}
