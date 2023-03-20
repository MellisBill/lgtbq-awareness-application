import React, { useState }  from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { scopes } from '../config/google-oauth';
import { getFormResponses } from '../lib/google-forms';
import { PageHeading } from '../components/PageHeading';

export const QandA = () => {

    const [token, setToken] = useState<string>("");

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            localStorage.setItem('oauth-token', codeResponse.access_token);
        },
        onError: (error) => console.log('Login Failed:', error),
        scope: scopes
    });

    return <>
        <PageHeading title='Question and Answer'/>
    </>
}
