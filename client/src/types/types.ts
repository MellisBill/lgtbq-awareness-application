
export type MenuItem = {
    label: string,
    value: string,
}

export type Definition = {
    id: number, 
    title: string, 
    description: string,
}

export type StringDict = {
    [key:string] : string,
}

export type ErrorCodeMap = {
    [key:number]: Error,
}

export type Error = {
    errorMessage: string,
    errorType: string,
}

export type FormAPIResponseItem = {
        [key:string]: {
            questionId: string,
            textAnswers: {
                answers: {
                    [key: number]: {
                        value: string
                    }
                }
            }
        }
    }


export type FormAPIResponseList = [
    answers: {
        [key:string]: {
            questionId: string,
            textAnswers: {
                answers: [
                    value: string
                ]
            }
        }
    }
] 