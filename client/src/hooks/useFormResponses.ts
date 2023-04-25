import { useEffect, useState } from "react"
import { errorCodes } from "../data/error-codes";
import { getFormResponses } from "../lib/google-forms";
import { Error, FormAPIResponseList } from "../types/types";

// Hook to make an API request to Google Forms API response-list endpoint
// param formId: ID of form
// param token: google auth token
// returns [responseItems, error]
//      responseItems: List of form response items from API
//      error: object containing error description and type to display in error banner
export const useFormResponses = (formId: string, token: string) : [any, Error] => {

    const [responseItems, setResponses] = useState<FormAPIResponseList | []>([]);
    const [error, setError] = useState<Error>({errorMessage: "", errorType: ""});

    useEffect(() => {
        getFormResponses(formId)
            .then(res => {
                if (res.error) {
                    setError(errorCodes[res.error]);
                    setResponses([]);
                } else {
                    setError({errorMessage: "", errorType: ""});
                    const data = res.body.responses.map((response: any) => response.answers);
                    setResponses(data);
                }
            })
    }, [formId, token]);

    return [responseItems, error];
}