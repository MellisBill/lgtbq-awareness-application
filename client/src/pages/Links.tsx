import React from 'react'
import { EmbeddedForm } from '../components/MSForm'
import { url } from '../data/question-form';

export const Links = () => {
  return (
    <EmbeddedForm url={url}/>
  )
}
