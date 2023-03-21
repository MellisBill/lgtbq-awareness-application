import React from 'react'
import { Error } from '../types/types'

export const ErrorBanner = ({error}: {error: Error}) => {
  return <>
    <figure className={`error-banner ${error.errorType}`}>
        <figcaption>{error.errorMessage}</figcaption>
    </figure>
  </>
}
