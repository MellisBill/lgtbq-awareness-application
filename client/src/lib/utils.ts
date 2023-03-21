import { FormAPIResponseItem } from "../types/types";

// Function to extract answer from Google forms API response item (each response item representing a question)
// param responseItem: list item from form response-list API call
// param questionId: id of question from which to return answer
// returns answer: answer to specified question, represented as a string
export const extractAnswer = (responseItem: FormAPIResponseItem, questionId: string): string => {
    try {
        return responseItem[questionId]['textAnswers']['answers'][0]['value'];
    } catch (error) {
        console.error("Invalid question key: " + questionId + ". Please check form config file and API response.")
        return ""
    }
}