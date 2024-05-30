import React from 'react';
import ProjectBox from './ProjectBox';
import p1 from '../images/p1.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={p1} projectName="Gamaiyn" />
        <ProjectBox projectPhoto={p4} projectName="eDukan69" />
        <ProjectBox projectPhoto={p5} projectName="EmployeeEase" />
        <ProjectBox projectPhoto={p6} projectName="ToDoList" />
        <ProjectBox projectPhoto={p7} projectName="CeaserCipher" />
      </div>

    </div>
  )
}

export default Projects