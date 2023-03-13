import React from 'react'
import { EmbeddedForm } from '../components/EmbeddedForm'
import { url } from '../data/question-form';

export const Links = () => {
  return (
    <EmbeddedForm url={url} title={'User T&Cs'}/>
  )
}
