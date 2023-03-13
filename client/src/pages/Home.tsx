import React, { useState } from 'react'
import { Toggle } from '../components/Toggle'

export const Home = () => {

  const [toggleSelected, setToggleSetelcted] = useState(false);

  return <>
      <h1>Home</h1>
      <Toggle value={toggleSelected} setValue={setToggleSetelcted}/>
    </>
}
