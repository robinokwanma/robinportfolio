import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

function PastProjects() {
  return (
    <div>
        <h1>Projects</h1>
        <p className='projectsection'><b>Few projects that I have worked on and still currently working on some.</b></p>
        <Container fluid>
          <hr />
      <Row className='projectsection my-4 py-4'>
        <Col md="6"><img src="/images/cyberdatahub.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>CYBER DATA HUB (Mobile App)</h2>
          <p >A Fullly Functional Virtual Top Up Application used for dispensig airtime, and data through automated means and APIs</p>
          <ul className='stacklist'>
            <li>React Native</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Axios</li>
          </ul>
          <div className='codelinks'>
          <a href="https://play.google.com/store/apps/details?id=com.supervas.cyberdatahub" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live App on Playstore</i></a>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className='projectsection my-4 py-4'>
        <Col md="6"><img src="/images/developerscyberng.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
        <h2>CYBER NG</h2>
          <p >A Business Page Website for a Startup Tech Company</p>
          <ul className='stacklist'>
            <li>Django</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
          <div className='codelinks'>
          <a href="https://developers.cyber.ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>

          
        </Col>
      </Row>
      <Row className='projectsection my-4 py-4'>
        <Col md="6"><img src="/images/djangoreacttodoapp.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>TO DO APP</h2>
          <p >A simple ToDo application that carries out CRUD functionalities build with django in the backend and react for the frontend</p>
          <ul className='stacklist'>
            <li>Django</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <div className='codelinks'>
          <a href="https://github.com/robinokwanma/Django-ToDoApp" target="_blank" rel="noopener noreferrer"><i class="bi bi-github">View Code </i></a>
          <a href="https://cyber.ng/how-to-build-a-todo-app-with-django-and-react/" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>

          
        </Col>
      </Row>
      <hr />
      <Row className='projectsection my-4 py-4'>
        <Col md="6"><img src="/images/djangosocial.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>Django Social Media App</h2>
          <p >Inspired by a little bit of twitter and facebook, this is a django based social-media-app prototype. It's still very rusty and still in development. Check back for more features soon</p>
          <ul className='stacklist'>
            <li>Django</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
          <div className='codelinks'>
          <a href="https://www.djangosocialapp.cyber.ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className='projectsection my-4 py-4'>
        <Col md="6"><img src="/images/myportfolio.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>MY PORTFOLIO V2</h2>
          <p >My personal portfolio. Its a sigle page website with a lot of bootstrap. I'm still skeptic on making the code public. But hey you have demo right here and can make a personal request.😉</p>
          <ul className='stacklist'>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
          <div className='codelinks'>
          <a href="https://justrobin.dev" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>
        </Col>
      </Row>
      <hr />
      </Container>
    </div>
  )
}

export default PastProjects