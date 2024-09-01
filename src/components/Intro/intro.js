import React from 'react';
import './intro.css';
import bg from '../../assets/images/manbg.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id = "intro">
        <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Arun</span> <br/>Website Designer </span>
        <p className='introPara'> i am a skilled web Designer with experiance in creating visually
          <p> appeling and user friendly websites</p></p>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={800} ><button className='btn'><b>Hire Me</b></button></Link>


            </div>
            <img src={bg}  alt ="Profile" className='bg'/>
    </section>
  )
}

export default Intro
