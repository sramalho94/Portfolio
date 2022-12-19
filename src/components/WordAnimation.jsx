import React from 'react'

const WordAnimation = () => {
  return (
    <div>
      <h4 className='wordCarousel'>
        <span>A Little About Me:</span>
        <div className='animated-div'>
          <ul className='flip4'>
            <li className='list-item'>Software Engineer</li>
            <li className='list-item'>PC Builder and Gamer</li>
            <li className='list-item'>Lover of dumplings</li>
            <li className='list-item'>New Yorker from Queens</li>
          </ul>
        </div>
      </h4>
      <h4 className='wordCarousel'>
        <span>Skills:</span>
        <div className='animated-div'>
          <ul className='flip4'>
            <li className='list-item'>React, Vue</li>
            <li className='list-item'>JavaScript, CSS</li>
            <li className='list-item'>Sql, Postgres</li>
            <li className='list-item'>MongoDB, Mongoose </li>
          </ul>
        </div>
      </h4>
    </div>
  )
}

export default WordAnimation