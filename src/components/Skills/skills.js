import React from 'react';
import './skills.css';
import WebDesign from '../../assets/images/webdesign.png';
import AppDesign from '../../assets/images/phone1.png';



const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Design is not just what it looks like and feels like,
             Design is how it works.The best way to predict the future is to create it.
             A user interface is like a joke. If you have to explain it, its not that good</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> WebDesign</h2>
                    <p>There is An demo text,you can write your content here</p>
                </div>         
            </div>
            
            <div className='skillBar'>
                <img src={AppDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> AppDesign</h2>
                    <p>There is An demo text,you can write your content here</p>
                </div>
            </div>


        </div>


      
    </section>
  );
}

export default Skills
