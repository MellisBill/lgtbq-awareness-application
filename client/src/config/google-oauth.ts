export const credentials = {
    "web": {
        "client_id":"31152415398-nt8l4r658to52vj424kc5ctfdhl1cg32.apps.googleusercontent.com",
        "project_id":"lgbt-awareness-application","auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"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",
        "redirect_uris":["http://localhost:3000"],
        "javascript_origins":["http://localhost:3000"]
    }
}
export const scopes: string = 'https://www.googleapis.com/auth/drive ' + 
                        'https://www.googleapis.com/auth/drive.file ' + 
                        'https://www.googleapis.com/auth/forms.body ' + 
                        'https://www.googleapis.com/auth/drive.readonly ' + 
                        'https://www.googleapis.com/auth/forms.body.readonly ' + 
                        'https://www.googleapis.com/auth/forms.responses.readonly ';