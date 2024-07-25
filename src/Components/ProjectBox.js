import React from 'react';
import { CiLink } from "react-icons/ci";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EmployeeEaseDesc : "This website is created using React and Tailwind CSS, and user Authentication with Firebase. A Job Portal",
    EmployeeEaseGithub : "https://github.com/siddiqui0013/employe_ease",

    ToDoListDesc : "This website is created using React. A to-To list",
    ToDoListGithub : "https://github.com/siddiqui0013/todo-list",

    eDukan69Desc : "This website is created using HTML, CSS and JavaScript and PHP for the backend. It is an e-commerce site demo.",
    eDukan69Github : "https://edukan69.netlify.app/",

    CeaserCipherDesc : "This website is created with HTML, CSS, Javascript, to enctypt/decrypt Ceaser Cipher text.",
    CeaserCipherGithub : "https://siddiqui0013.github.io/ceaser/",

    GamaiynDesc : "This website is created using bootstrap. It is a online gaming site demo.",
    GamaiynGithub : "https://gaimayn.netlify.app/",

    Attendance_ManagementDesc : "This is a full stack Attendence Management System (MERN) with user and admin panel.",
    Attendance_ManagementGithub : "https://github.com/siddiqui0013/attendance-system",

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