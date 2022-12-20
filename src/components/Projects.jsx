import React from 'react'
import GithubLogo from '../Assets/github.svg'
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
          <div className='project-description-container'>
            <h3 className='project-description'> In this first project, I created a web browser version of the classic board game, Battleship. Using only vanilla JavaScript I created a fully functional game where the player goes against an AI. When either the player or the AI runs out of ships, the game is over</h3>
          </div>
          <div className='project-link'>
            <a href='https://admiralstephanbattleship.surge.sh/'>Project Link</a>
          </div>
          <div className='project-link'>
            <img src={GithubLogo} className='FooterIcon'/>
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
          <div className='project-description-container'>
            <h3 className='project-description'> In this group hackathon project, our group created a theme parked themed web page. There are a number of themes and attractions to navigate through as you explore the page. The user also has the capability to add and delete attractions as well.</h3>
          </div>
          <div className='project-link'>
            <a href='https://corney-island2022.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
          <img src={GithubLogo} className='FooterIcon'/>
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
          <div className='project-description-container'>
            <h3 className='project-description'> The Faults In Our Stars is a hyper-personalized, social experience bringing astrology into the 22nd century. Our aim is to create social circles revolving around zodiac signs. This website will allow you to connect to people that are compatible to your zodiac sign and at the same time rate the users based on their personalities and sign compatibility; wether good or bad, create new social circles, that will improve you work and love life.
            </h3>
          </div>
          <div className='project-link'>
            <a href='https://starz-app.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
          <img src={GithubLogo} className='FooterIcon'/>
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
          <div className='project-description-container'>
            <h3 className='project-description'> In this final project for General Assembly's Software Engineering Immersive, I made a full stack web application that allows users to look up trainers in the base pokemon games and see their pokemon team. Suggestions are given on how to beat each pokemon based on that Pokemon's type. </h3>
          </div>
          <div className='project-link'>
            <a href='https://pokepro-frontend.herokuapp.com/'>Project Link</a>
          </div>
          <div className='project-link'>
          <img src={GithubLogo} className='FooterIcon'/>
            <a href='https://github.com/sramalho94/PokePro'>Project Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects