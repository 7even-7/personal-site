import React,{ useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faMessage, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import emailjs, { send } from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55fcsgp', 'template_0651idt', form.current, 'd1NBbPf72gUIZaAax')
      .then((result) => {
          window.alert("Message sent.")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className='contact'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <input type="text" id="name" name="user_name" required/>
            <label for="name"><FontAwesomeIcon icon={faUser} style={{color: "#772828",}}/> Your Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="number" name="user_phone" required/>
            <label for="number"><FontAwesomeIcon icon={faPhone} style={{color: "#772828",}}/> Phone #</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" name = "user_email" required/>
            <label for="email"><FontAwesomeIcon icon={faEnvelope} style={{color: "#772828",}}/> Email</label>
          </div>
          <div className="input-group">
            <textarea id="message"  name="message" rows="7"/>
            <label for="message"><FontAwesomeIcon icon={faMessage} style={{color: "#772828",}}/> Your Message</label>
          </div>
          <button type='submit' value="Send"><FontAwesomeIcon icon={faPaperPlane} style={{color: "#772828",}}/> Submit</button>
        </form>

      </div>
    </>

  )
}

export default Contact
