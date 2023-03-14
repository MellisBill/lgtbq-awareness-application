import React from 'react'

export const PageHeading = ({title}: {title: string}) => {
  return (
    <div className='page-heading'>
        <h1>{title}</h1>
    </div>
  )
}
