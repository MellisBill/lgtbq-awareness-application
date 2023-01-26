import { poem } from './data/poem';
import './styles/app.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Links } from './pages/Links'
import { Posts } from './pages/Posts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/posts" element={<Posts/>}/>
    </Routes>
  );
}

export default App;
