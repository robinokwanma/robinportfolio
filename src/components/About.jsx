import {Card, Row, Col, Container}  from 'react-bootstrap'
import React from 'react'
import '../styling/About.css'

function About() {
  return (
    <div   >
      <h1 className='text-center'>A Little About Me</h1>
      <Container fluid>
      <Row  md="2" className=' justify-content-center'>
      <Card >
        <Row>
      <Col className='py-3 my-2 mx-2'>
          <img src="/images/robin.jpg" alt="robin okwanma" className='robinpic'/>
          <div className='py-3 followbuttons'>   
                 
                 <Row>
                   <Col ><a href="https://facebook.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></Col>
                   <Col><a href="https://twitter.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></Col>
                   <Col><a href="https://linkedin.com/in/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></Col>
                   <Col><a href="https://wa.me/2348148190856" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a></Col>
                 </Row>
 
         </div>
          <p className='abouttext'>I possess expertise in full-stack web development, encompassing proficiency in both the Django and React frameworks for backend and frontend development. In addition, I possess a proven track record of building exceptional mobile applications across Android and iOS platforms.</p>
          <hr />
        </Col>
        <Col>
        <Card.Body>

    <p><b>STRENGTHS</b></p>
    <p>Why Should You Work With Me?</p>
    <li>Hard Worker</li>
    <li>Fast Learner</li>
    <li>Satisfactory Output</li>
    <li>Always On Schedule</li>
    <li>Allergic to Failure</li>
        </Card.Body>
        <Card.Footer>
          <p><b>HOBBIES</b></p>
          <p>What i do when i'm not behind my computer?💻</p>
          <li>Workout</li>
          <li>Watch Movies</li>
          <li>Read Comics</li>
        </Card.Footer>
        </Col>
        </Row>
      </Card>
      </Row>
      </Container>
      <hr />
    </div>
  )
}

export default About;