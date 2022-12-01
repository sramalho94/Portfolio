import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Test from './components/TestComponent'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
