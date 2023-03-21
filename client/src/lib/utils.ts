import { FormAPIResponseItem } from "../types/types";

export const extractAnswer = (response: FormAPIResponseItem, questionId: string): string => {
    try {
        return response[questionId]['textAnswers']['answers'][0]['value'];
    } catch (error) {
        console.error("Invalid question key: " + questionId + ". Please check form config file and API response.")
        return ""
    }
}