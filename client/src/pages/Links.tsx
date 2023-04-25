import React from 'react'
import { PageHeading } from '../components/PageHeading'
import { links } from '../data/links'
import { Link } from '../components/Link'

export const Links = () => {
  return <>
    <PageHeading title='Links'/>
    {links.map((link, i) => {
      return <Link key={i} title={link.title} url={link.url} description={link.description}/>
    })}
  </>
}
