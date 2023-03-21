import { ErrorCodeMap } from "../types/types";

export const errorCodes : ErrorCodeMap = {
    404: {
        errorMessage: 'The form data you have requested does not exist or has been deleted.',
        errorType: 'error',
    },
    401: {
        errorMessage: 'We were unable to fetch response data. Please sign in to Google and refresh the page.',
        errorType: 'info',
    },
    403: {
        errorMessage: 'We were unable to authenticate this request. Please try again later.',
        errorType: 'error',
    },
}