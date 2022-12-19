import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Test from './components/TestComponent'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <div className="navbar-container">
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
