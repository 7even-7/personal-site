import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faMessage, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <>
      <div className='contact'>
        <form>
          <div className="input-group">
            <input type="text" id="name" required/>
            <label for="name"><FontAwesomeIcon icon={faUser} style={{color: "#772828",}}/> Your Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="number" required/>
            <label for="number"><FontAwesomeIcon icon={faPhone} style={{color: "#772828",}}/> Phone #</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" required/>
            <label for="email"><FontAwesomeIcon icon={faEnvelope} style={{color: "#772828",}}/> Email</label>
          </div>
          <div className="input-group">
            <textarea id="message"  rows="7"/>
            <label for="message"><FontAwesomeIcon icon={faMessage} style={{color: "#772828",}}/> Your Message</label>
          </div>
          <button type='submit'><FontAwesomeIcon icon={faPaperPlane} style={{color: "#772828",}}/> Submit</button>
        </form>

      </div>
    </>

  )
}

export default Contact
