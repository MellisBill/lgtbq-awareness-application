import { useGoogleLogin } from "@react-oauth/google";
import { scopes } from "../config/google-oauth";

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