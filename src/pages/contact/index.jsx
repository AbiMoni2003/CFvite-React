import { Fragment } from "react";
import './Style.css'
import Header from "../../component/header";


 function Contact() {
    return(
        <Fragment>
            <Header/>
            <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form className="contact-form">
      
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
          
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" />
          
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
        </Fragment>
        
    )
 }
 export default Contact;