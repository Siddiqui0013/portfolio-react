import { CgCPlusPlus  } from "react-icons/cg";
import {FaReact, FaPython, FaGithub, FaJava, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1 } from "react-icons/di";
import {SiExpress, SiTypescript, SiMongodb,SiTailwindcss} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Python: <FaPython/>,
        'C#': <TbBrandCSharp/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Typescript : <SiTypescript/>,
        Java : <FaJava/>,
        Tailwind : <SiTailwindcss/>,
        Github : <FaGithub/>,
        Bootstrap: <FaBootstrap/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
