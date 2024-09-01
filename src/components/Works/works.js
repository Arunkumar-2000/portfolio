import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/images/girl.png';
import Portfolio2 from '../../assets/images/teens.png';
import Portfolio3 from '../../assets/images/teengirls.png';
import Portfolio4 from '../../assets/images/boy2.png';
import {Link} from 'react-scroll'

const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='workDesc'>Digital design is like painting, except the paint never dries
       Creating multiple design concepts and refining the chosen direction,Ensuring the website is accessible on all devices
       </span>
       <div className='workImg'>
        <img src={Portfolio1} alt='' className='worksImg'/>
        <img src={Portfolio2}  alt='' className='worksImg'/>
        <img src={Portfolio3}  alt='' className='worksImg'/>
        <img src={Portfolio4}  alt='' className='worksImg'/><br/>
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={900} ><button className='workBtn'>See More</button></Link>
      
        </div>
     
      
    </section>
  )
}

export default Works
