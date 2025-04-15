import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Choose from './pages/Choose'
import Nearby from './pages/Nearby'
import Filter from './pages/Filter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Nearby" element={<Nearby />}/>
        <Route path="/Filter" element={<Filter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
