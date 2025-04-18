import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import All from './pages/All'
import Wheel from './pages/Wheel'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/All" element={<All />} />
            <Route path="/Wheel" element={<Wheel />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div >
  )
}

export default App
