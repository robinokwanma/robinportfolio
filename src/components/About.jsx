import {Card, Row, Col, Container}  from 'react-bootstrap'
import React from 'react'
import FollowIcons from './FollowIcons'

function About() {
  return (
    <div id='aboutrobin' className='text-center' >
      <h1>A Little About Me</h1>
      <Container fluid>
      <Row  md="2" className='text-center justify-content-center'>
      <Card >
        <Row>
      <Col className='py-3 '>
          <img src="/images/robin.jpg" alt="robin okwanma" className='robinpic'/>
          <FollowIcons/>
          <p>I possess expertise in full-stack web development, encompassing proficiency in both the Django and React frameworks for backend and frontend development. In addition, I possess a proven track record of building exceptional mobile applications across Android and iOS platforms.</p>
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