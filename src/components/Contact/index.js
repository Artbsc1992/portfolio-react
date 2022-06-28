import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')
  const refForm = useRef();
  useEffect (() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
          'service_mhpni9h',
          'template_dhymztm',
          refForm.current,
          'J8M4vX93OliUaLIG3'
      )
      .then(
        ()=> {
          alert('Message successfully sent!')
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return(
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
          indx={15} />
        </h1>
        <p>
          I'm always interested in hearing about new oportunities, so if you'd like to chat please get in touch.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type="text" name="name" placeholder="Name" required/>
              </li>
              <li className='half'>
                <input type="email" name="email" placeholder="Email" required/>
              </li>
              <li>
                <input type="text" name="subject" placeholder="Subject" required/>
              </li>
              <li>
                <textarea name="message" placeholder="Message" required></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact;