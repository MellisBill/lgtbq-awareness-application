import React, { useState, useEffect } from 'react'
import { Error } from '../types/types'

export const ErrorBanner = ({error}: {error: Error}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (error.errorMessage && error.errorType) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [error])

    return <>
        {
            visible ? 
                <figure className={`error-banner ${error.errorType}`}>
                    <figcaption>{error.errorMessage}</figcaption>
                </figure>
            : 
                <div/>
        }
    </>
}
