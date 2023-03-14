import React from 'react'
import { useState, useMemo } from 'react'
import { definitions } from '../data/definitions'
import { strings } from '../data/strings'
import { PageHeading } from '../components/PageHeading'
import '../styles/app.scss'

export const Glossary = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const filteredDefinitions = useMemo(() => {
        return searchTerm === '' ? definitions : definitions.filter((definition) => {
            console.log(definition)
            return definition.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1;
        })
    }, [searchTerm])

  return (<>
    <main>
        <PageHeading title='Glossary'/>
        <form className='search-form'>
            <input  
                type="text"
                className='search-input'
                value={searchTerm}
                placeholder={strings.searchPlaceholder}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
        <ul className='definitions-list'>
            {
                filteredDefinitions.map((definition) => {
                    return <li key={definition.id}>
                        <h2>{definition.title}</h2>
                        <p>{definition.description}</p>
                    </li>
                })
            }
        </ul>
        { filteredDefinitions.length === 0 && <p>No results found</p>}
    </main>
    </>
  )
}
