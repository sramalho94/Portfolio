import React from 'react'

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='project-list-header'>
        My Projects:
      </div>
      <div className='projects-list'>
        <div className='project-container'>
          <div className='project-title'>
            First Project: Battle Ships
          </div>
          <div className='project-image-container'>
            <img src="https://i.imgur.com/viiKyIb.png" className='project-image'/>
          </div>
          <div className='project-link'>
            <a href='https://admiralstephanbattleship.surge.sh/'>Project Link</a>
          </div>
          <div className='project-link'>
            <a href='https://github.com/sramalho94/Admiral-Stephan-Battleship-Project'>Project Github</a>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-title'>
            Hackathon Project: Corney Island
          </div>
          <div className='project-image-container'>
            <img src="https://i.imgur.com/R1a9BlX.png" className='project-image'/>
          </div>
          <div className='project-link'>
            <a href='https://corney-island2022.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
            <a href='https://github.com/sramalho94/Corney_Island_Group_Project'>Project Github</a>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-title'>
            Group Project: The Faults in Our Stars
          </div>
          <div className='project-image-container'>
            <img src="https://i.imgur.com/bKO85LN.png" className='project-image'/>
          </div>
          <div className='project-link'>
            <a href='https://starz-app.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
            <a href='https://github.com/BrianDLara/The-Faults-In-Our-Stars_Frontend'>Project Github</a>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-title'>
            Hackathon Project: PokePro
          </div>
          <div className='project-image-container'>
            <img src="https://i.imgur.com/KHzfbsY.png" className='project-image'/>
          </div>
          <div className='project-link'>
            <a href='https://pokepro-frontend.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
            <a href='https://github.com/sramalho94/PokePro'>Project Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects