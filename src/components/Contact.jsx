// import React from 'react'
// import { useState } from 'react';
// import { send } from 'emailjs-com';

// const ContactForm = () => {


    
//     const [toSend, setToSend] = useState({
//         from_name: '',
//         to_name: '',
//         message: '',
//         reply_to: '',
//       });
    
//       const onSubmit = (e) => {
//         e.preventDefault();
//         send(
//           'service_beg4ok8',
//           'template_hm8m12l',
//           toSend,
//           'ZhPCouDfw0H83KOf5'
//         )
//           .then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//           })
//           .catch((err) => {
//             console.log('FAILED...', err);
//           });
//       };
    
    
//       const handleChange = (e) => {
//         setToSend({ ...toSend, [e.target.name]: e.target.value });
//       };
    
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3">React Contact Form Component Example</h2>
//       <form onSubmit={onSubmit}>
//       <input
//     type='text'
//     name='from_name'
//     placeholder='from name'
//     value={toSend.from_name}
//     onChange={handleChange}
//   />
//   <br />
//   <input
//     type='text'
//     name='to_name'
//     placeholder='to name'
//     value={toSend.to_name}
//     onChange={handleChange}
//   />
//   <br />
//   <input
//     type='text'
//     name='message'
//     placeholder='Your message'
//     value={toSend.message}
//     onChange={handleChange}
//   />
//   <br />
//   <input
//     type='text'
//     name='reply_to'
//     placeholder='Your email'
//     value={toSend.reply_to}
//     onChange={handleChange}
//   />
//   <br />
//   <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default ContactForm

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card } from 'react-bootstrap';
import FollowIcons from './FollowIcons';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beg4ok8', 'template_hm8m12l', form.current, 'ZhPCouDfw0H83KOf5')
      .then((result) => {
          console.log(result.text);
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
                <input className="form-control" type="text" name="name" placeholder=' full name'/>
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder='your email please' />
                <label>Message</label>
                <textarea className="form-control" name="message" placeholder='type your message here'/>
                <button className="btn btn-dark submit-btn" type="submit" value="Send">Send <i className="bi bi-send-fill"></i></button>
                </form>
               
                <h4><FollowIcons/></h4>
                    </Card.Body>
        
    </Card>
                </Col>
            </Row>
    </div>
    
  );
};

export default ContactForm