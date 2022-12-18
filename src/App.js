import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Test from './components/TestComponent'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

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
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
