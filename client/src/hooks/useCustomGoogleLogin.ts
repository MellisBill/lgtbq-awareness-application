import { useGoogleLogin } from "@react-oauth/google";
import { scopes } from "../config/google-oauth";

// Hook to create login function that utilises Google login hook, passing scopes and success/failiure functionality
// param setToken: function to set auth token variable
// returns login: callable function that will log user into Google once they have provided credentials 
export const useCustomGoogleLogin = (setToken: any) => {
    const login = useGoogleLogin({
        onSuccess: (res) => {
            localStorage.setItem('oauth-token', res.access_token);
            setToken(res.access_token);
        },
        onError: (error) => {
            console.error('Login Failed: ', error);
            localStorage.removeItem('oauth-token');
        },
        scope: scopes
    });

    return login;
}