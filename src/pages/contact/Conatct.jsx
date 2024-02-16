import React, { useState } from 'react'
import './Contact.css'
import {MdOutlinePhone,MdEmail,MdLocationPin} from 'react-icons/md'
function Conatct() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  return (
    <section className='contact'>
      <div className='contact_header'>
        <h1>Contact</h1>
        
        </div>
        <div className='contact_wrapper'>
          <div className="contact_left">
          <p>Get in touch!!</p>
            <div>
            <div className="contact_info"><MdOutlinePhone className='contact_icon'/><span>+918589963836</span></div>
            <div className="contact_info"><MdEmail className='contact_icon'/><span>raheestm123@gmail.com</span></div>
            <div className="contact_info"><MdLocationPin className='contact_icon'/><span>Kerala,India</span></div>
            </div>
          </div>
          <div className="contact_right">
            <div>
            <div className="contact_form">
              <input type='text' id='name'
               placeholder='Your Name' 
               name='name' 
               value={name}
               onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="contact_form">
              <input type='email' id='email'
               placeholder='Your Email' 
               name='email' 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="contact_form">
              <textarea type='text' id='message'
               placeholder='Message' 
               name='message' 
               value={message}
               onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button className='send' type='submit' >Send</button>
            </div>
            </div>
         
    
        </div>
    </section>
  )
}

export default Conatct