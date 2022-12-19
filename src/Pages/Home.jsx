import React from 'react'
import Projects from '../components/Projects'
import WordAnimation from '../components/WordAnimation'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-text-container'>
        <div className='home-text'>
          <h1 className='home-title'>Stephan D Ramalho</h1>
          <h2 className='home-sub-title'>Junior <br/>Software <br/> Engineer</h2>
        </div>
      <WordAnimation />
      <div className='explore-container'>
        
          <a href='/projects'>
          <h3 className='explore-text'> Explore Work</h3>
          </a>
      </div>
      </div>
      
    </div>
    
  )
}

export default Home