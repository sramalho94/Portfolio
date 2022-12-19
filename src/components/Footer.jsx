import React from 'react'
import GithubLogo from '../Assets/github.svg'
import LinkedInLogo from '../Assets/linkedin.svg'
const Footer = () => {
  return (
    <div className='FooterContainer'>
      <p className='FooterHeader'>Let's Connect: <br/> email:sramalho@fordham.edu </p>
      <a className='FooterLink' href="https://github.com/sramalho94">
        <img src={GithubLogo} className='FooterIcon'/>
      </a>
      <a className='FooterLink'href="https://www.linkedin.com/in/stephan-ramalho/">
      <img src={LinkedInLogo} className='FooterIcon'/>
      </a>
    </div>
  )
}

export default Footer