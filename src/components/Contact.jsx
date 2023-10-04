import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card } from 'react-bootstrap';
import '../styling/Contact.css'

export const ContactForm = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beg4ok8', 'template_hm8m12l', form.current, 'ZhPCouDfw0H83KOf5')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);  // update the emailSent state to true
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <div className='text-center py-3 my-3'>
                        <h1>
                         Contact Robin <i className="bi bi-envelope-check-fill"></i>
                         </h1>
            <Row className=' my-2 p-3 contactcard'>
                <Col  lg={6} mx-auto='true' >
                <Card className='my-2 p-4 rounded cardmain'>
                    <Card.Title>
                        <p><b>Email Me</b></p>
                    </Card.Title>
                    
                 <Card.Body className='contactcardbody'>
                    <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className="form-control" type="text" name="name" placeholder=' full name' required/>
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder='Johndoe@gmail.com' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                <label>Message</label>
                <textarea className="form-control" name="message" placeholder='type your message here' required/>
                <button className="btn btn-dark submit-btn" type="submit" value="Send">Send <i className="bi bi-send-fill"></i></button>
                </form>
                {emailSent && <h6 className='text-success'>Email successfully sent! <br /> Hi there, I will get back to you as soon as i can. Cheers!</h6>}
                <div className='py-3 followbuttons'>   
                 
                 <Row>
                   <Col ><a href="https://facebook.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></Col>
                   <Col><a href="https://twitter.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></Col>
                   <Col><a href="https://linkedin.com/in/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></Col>
                   <Col><a href="https://wa.me/2348148190856" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a></Col>
                 </Row>
 
         </div>
                    </Card.Body>
        
    </Card>
                </Col>
            </Row>
    </div>
    
  );
};

export default ContactForm