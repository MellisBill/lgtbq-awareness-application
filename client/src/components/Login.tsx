import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

export const Login = () => {
  return <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
}
