import React from 'react';
import'./skills.css';
import webTechnologies from '../../assets/web1.jpg';
import coding from '../../assets/code1.jpg';
import ios from '../../assets/os.jpg';



const Skills = () => {
  return (
    <div>
      <div  id='skills'>
        <span className='skillTitle'>My skillset</span><br/>
        <span className='skillDesc'>My skills include web development, coding, and problem-solving. I excel in creating solutions with modern technologies and effective strategies.</span>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={webTechnologies } alt=" Web Technologies" className='skillBarImg' />
            <div className="skillbarText">
            <h1> Web Technologies</h1>
            <p>Proficient in HTML, CSS, JavaScript and React.js for building responsive, dynamic, and efficient web applications.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={coding} alt="technical languages" className='skillBarImg' />
            <div className="skillbarText">
            <h1>Languages</h1>
            <p>Skilled in Python, C, and C++ for developing efficient, high-performance applications and solving complex programming challenges.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={ios} alt="Operating System" className='skillBarImg' />
            <div className="skillbarText">
            <h1>Operating System</h1>
            <p>Experienced with Windows and Ubuntu for efficient development, system administration, and managing diverse computing environments.</p>
            </div>
        </div> 
        </div>
      </div>
    </div>
  );
}

export default Skills;
