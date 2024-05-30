import React from 'react';
import { CiLink } from "react-icons/ci";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EmployeeEaseDesc : "This website is created using React and Tailwind CSS, and user Authentication with Firebase. A Job Portal",
    EmployeeEaseGithub : "https://github.com/siddiqui0013/employeease",

    ToDoListDesc : "This website is created using React. A to-To list",
    ToDoListGithub : "https://github.com/siddiqui0013/todo-list",

    eDukan69Desc : "This website is created using HTML, CSS and JavaScript and PHP for the backend. It is an e-commerce site demo.",
    eDukan69Github : "https://github.com/siddiqui0013/eDukan",

    CeaserCipherDesc : "This website is created with HTML, CSS, Javascript, to enctypt/decrypt Ceaser Cipher text.",
    CeaserCipherGithub : "https://github.com/siddiqui0013/ceaser",

    GamaiynDesc : "This website is created using bootstrap. It is a online gaming site demo.",
    GamaiynGithub : "https://github.com/siddiqui0013/gamaiyn",

  }

  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><CiLink/> Link</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox