import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Full from './pages/Full'
import Wheel from './pages/Wheel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Full" element={<Full />} />
        <Route path="/Wheel" element={<Wheel />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
