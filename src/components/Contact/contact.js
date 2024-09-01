import React from 'react';
import './contact.css';
import Walmart from '../../assets/images/walmart.png';
import Adobe from '../../assets/images/adobe.png';
import Netflix from '../../assets/images/netflix.png';
import Microsoft from '../../assets/images/microsoft.png';
import Linkedin from '../../assets/images/linkedin.png';
import Email from '../../assets/images/email.png';
import InstagramIcon from '../../assets/images/instagram.png';
import GithubIcon from '../../assets/images/github.png';
// import emailjs from '@emailjs/browser';

const Contact = () => {
   

  return (
    
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.
                 Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper,
                 magna diam porttitor mauris, quis sollicitudin sapien justo in libero
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                <img src={Netflix} alt='Client' className='clientImg'/>
                <img src={Microsoft} alt='Client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to dicuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your name'/>
                <input type='email' className='email' placeholder='Your email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your messages'></textarea>
                <button  type = "submit"  value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                   <a href='https://www.linkedin.com/in/arun-prasath-jerry2000/'><img src= {Linkedin} alt='linkedin' className='link' ></img></a>
                   <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#chat/home'><img src={Email} alt='email' className='link' ></img></a>
                    <a href='https://www.instagram.com/lonelyak1220/'><img src={InstagramIcon} alt='instagram' className='link' ></img></a>
                   <a href='https://github.com/Jerrys-Ak'> <img src= {GithubIcon} alt='github' className='link' ></img></a>
                </div>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
