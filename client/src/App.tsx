import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Links } from './pages/Links'
import { Posts } from './pages/Posts'
import { Nav } from './components/Nav';
import { Glossary } from './pages/Glossary'
import { Modal } from './components/Modal'
import { FormAcceptModal } from './components/FormAcceptModal';
import React, {useEffect, useState} from 'react'
import './styles/app.scss'
import { userTerms } from './data/user-terms';

function App() {

  // determines if T&Cs modal is open
  const [modalOpen, setModalOpen] = useState<Boolean>(false);

  // check local storage for if user has accepted T&Cs
  useEffect(() => {
    if (!localStorage.getItem('accepted-user')) {
      setModalOpen(true);
    };
  }, []);

  return <>
    <div className='App' style={{overflow: modalOpen ? 'hidden' : 'auto'}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/links" element={<Links />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
    </div>

    {
      /* T&Cs modal */
      modalOpen && 
        <Modal>
          <FormAcceptModal content={userTerms} storageKey="user"/>
        </Modal>
    }
</>
}

export default App;
