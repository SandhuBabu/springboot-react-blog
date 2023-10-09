import React from 'react'
import { VscSend } from 'react-icons/vsc'
import { BiReset } from 'react-icons/bi'
import './Contact.scss'

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <h1>Contact Me</h1>
      <div className="input-group">
        <input type="text" name='name' style={{textTransform: 'capitalize'}} required />
        <label htmlFor="">Name</label>
      </div>
      <div className="input-group">
        <input type="text" name='email' required />
        <label htmlFor="">Email</label>
      </div>
      <div className="message-group">
        <textarea name="message" id="" cols="30" rows="10" required></textarea>
        <label htmlFor="">Message</label>
      </div>

      <div className="button-group">
        <button type='reset'>Reset <BiReset className='btn-icon' /></button>
        <button type='submit'>Send <VscSend className='btn-icon' /> </button>
      </div>

    </form>
  )
}

export default ContactForm