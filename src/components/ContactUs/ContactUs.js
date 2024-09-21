import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Ensure this path is correct

const App = () => {

    const initialData={
        name:'',
        subject:'',
        email:'',
        message:''
    };

  const [data, setData] = useState(initialData);

  const {name,subject,email,message}= data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !subject || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    emailjs.sendForm('service_5342yrt', 'template_kvktux8', e.target, 'adHlz4Qy_4ihM_lL9')
      .then(
        (result) => {
          console.log('Success:', result.text);
          setData(initialData);
        },
        (error) => {
          console.log('Error:', error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );

      e.target.reset();

  }

  return (
    <div id="contact">

        <span className='contactTitle'>Contact Me</span>
        <span className='contactDesc'>Please fill out the form to contact</span>
        
      <form onSubmit={submitHandler} autoComplete='off' className='contactForm'>
        
       <input type="text" name="name" value={name} onChange={changeHandler} placeholder='Enter your name' /><br/><br/>
        
       <input type="text" name="subject" value={subject} onChange={changeHandler} placeholder='Subject'/><br/><br/>
        
         <input type="email" name="email" value={email} onChange={changeHandler} placeholder ='Your Email' /> <br/><br/>
        
       <textarea name="message" value={message} onChange={changeHandler}   placeholder ='Your Message' className='msg' ></textarea><br/><br/>
        <button type="submit" value="send" className='submitBtn' >Submit</button>
      </form>

    </div>
  );
};

export default App;
