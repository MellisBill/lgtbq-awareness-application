
export type MenuItem = {
    label: string,
    value: string,
};

export type Definition = {
    id: number, 
    title: string, 
    description: string,
};

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
                answers: {
                    [key: number]: {
                        value: string
                    }
                }
            }
        }
    }
] 

export type FormConfig = {
    [key:string]: {
        id: string,
        embedUrl: string,
        questionIds: {
            [key: number]: string
        }
    }
};

export type CarouselProps = {
    height?: string,
    children: any,
    auto?: boolean,
    interval?: number,
};

export type CarouselItemProps = {
    height?: string,
    children?: any,
};

export type InfoSlideProps = {
    imageSrc: string,
    title: string,
    alignment: string,
    to: string,
    children: any,
}

export type ExtLink = {
    title: string, 
    url: string, 
    description: string,
}