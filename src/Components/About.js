import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >About myself </h1>
          <p>
          A frest graduate in <b>Information Technology</b>, with expertise in Web development using <b>React Js.</b> With years of experience in developing web apps.I have also worked with CSS libraries like <b>Tailwind</b> and <b>Bootstrap. </b>
I also have experience in integerating backend using Php and Google Firebase.
Other then this, been doing projects for different platforms in different languages.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='Node' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind'/>
        <Skills skill='C++' />
        <Skills skill='Java'/>
        <Skills skill='Python' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Github' />
        
      </div>
    </>
  )
}

export default About