import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3, faReact, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  useEffect (() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);
  return(
    <>
    <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15} />
          </h1>
          <p>
            I  was a business administrator, 
            and I had the opportunity to create my own company 
            where I learned how to manage time and resources in a 
            fast-paced environment.
          </p>
          <p>
            All these experiences help me when I decide to become a full-stack developer,
            with more than 100 hours of pair programming, building projects from zero 
            with people from all around the world thanks to Microverse, where I learned 
            all that has to do with web development and professional profile.
          </p>
          <p>
            Technology is one of my greatest passions, and programming has helped me dive 
            into this industry. My main goal now is to start my journey as a developer by 
            helping solve problems and fill the necessities of tech companies with a 
            full-time job. 
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGithub} color='#fff' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman' />
   </>
  )
}

export default About;