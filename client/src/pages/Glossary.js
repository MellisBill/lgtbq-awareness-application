import { useState, useMemo } from 'react'
import { definitions } from '../data/definitions'
import '../styles/app.css'

export const Glossary = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const filteredDefinitions = useMemo(() => {
        return searchTerm === '' ? definitions : definitions.filter((definition) => {
            console.log(definition)
            return definition.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1;
        })
    }, [searchTerm])

  return (
    <form>
        <input  
            type="text"
            className='search-input'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
        {
            filteredDefinitions.map((definition) => {
                return <li key={definition.id}>
                    <h2>{definition.title}</h2>
                    <p>{definition.description}</p>
                </li>
            })
        }
        </ul>
    </form>
  )
}
