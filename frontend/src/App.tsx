
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Index from './pages'

function App() {
  

  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={< Index/>}/>
        <Route path='/Home' element={< Home/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
