import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

export const Login = ({setToken} : any) => {
  return <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          setToken(credentialResponse.credential);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
}
