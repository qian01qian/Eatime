import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import All from './pages/All'
import Wheel from './pages/Wheel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All" element={<All />} />
        <Route path="/Wheel" element={<Wheel />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
