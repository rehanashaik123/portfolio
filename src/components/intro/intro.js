import React from 'react';
import './intro.css';
import bg from '../../assets/Rehana1.png';
import { Link } from 'react-scroll';
import hire from '../../assets/hire1.jpg';

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="introName">Rehana</span> <br/>
             website Designer
             </span>
            <p className="introPara">
                I am a skilled web designer with experience in creating visually appealing and user friendly website.
                </p>
            <br/>
            <Link><button className="btn"><img src={hire} alt=" " className="hire" />Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
      </section>
    </div>
  );
}

export default Intro;
