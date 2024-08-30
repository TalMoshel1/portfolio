import React from "react"
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";


import '../../App.css'







const Technologies = (props) => {
  return (
    <section className='technologies-container'>
        <h1 style={{paddingTop: '2rem', paddingBottom: '2rem'}}>Technologies</h1>
        <div className='icons-container'>

<FaJs/>
<LiaNode/>
<IoLogoHtml5/>
<FaReact/>
<FaCss3Alt/>
<SiTypescript/>
<FaPython/>
<FaGit/>


        </div>

      
    </section>
  )
};

export default Technologies;
