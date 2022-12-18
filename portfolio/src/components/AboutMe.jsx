import React from 'react'

const AboutMe = () => {
  return (
  <div className='AboutMe'>
    <div className='AboutContainer'>
      <div className='AboutHeader'>
        <p>About Me</p>
      </div>
      <div className='AboutInfo'>
        <div className='AboutPicContainer'>
          <img className='AboutPic' src="https://media-exp1.licdn.com/dms/image/C5603AQEckhWxz8uOOQ/profile-displayphoto-shrink_200_200/0/1517059699467?e=1675296000&v=beta&t=9U6mjlkRaXMvyUTZWGzy68OT9afjZT-MRkWw0ehw1yY"/>
        </div>
        <div className='AboutBio'>
          <p className='BioText'>I am a software engineer with a background in providing unparalleled customer service to clients in a variety of retail environments. My previous experience has taught me how to embrace problem solving, communicate and collaborate with individuals and teams, and perform tasks in fast-paced settings. I love to learn new things, let's learn from each other!</p>
          <div className='ResumeButtonContainer'>
          <a className='ResumeButton' href='https://docs.google.com/document/d/1D6-wQXMbYHRCu0V7Pizsy171BjiEjYpy0JCLEostJGU/export?format=pdf'>Resume</a>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe