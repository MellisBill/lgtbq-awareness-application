import './styles/app.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Links } from './pages/Links'
import { Posts } from './pages/Posts'
import { Nav } from './components/Nav';
import { Glossary } from './pages/Glossary'
import React from 'react'

function App() {
  return <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/glossary" element={<Glossary/>}/>
    </Routes>
  </>
}

export default App;
