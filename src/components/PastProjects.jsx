import React from 'react'
import { Row, Col, Container, Carousel, Badge } from 'react-bootstrap';

function PastProjects() {
  return (
    <div>
        <h1>Projects</h1>
        <p className='projectsection'><b>Few projects that I have worked on and still currently working on some.</b></p>
        <Container fluid>
          <hr />
          <Carousel>
          <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/mymedicalbank.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>MyMedicalBank (Mobile App)</h2>
          <p >Nigeria's 1st Personal Health Record App For Both Android and iOS devices.</p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>React Native</Badge>
            <Badge className='mx-2 bg-success my-2'>Expo</Badge>
            <Badge className='mx-2 bg-success my-2'>Javascript</Badge>
            <Badge className='mx-2 bg-success my-2'>Axios</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://play.google.com/store/apps/details?id=com.mymedicalbankphr" target="_blank" rel="noopener noreferrer"><i class="bi bi-google-play">Live App on Playstore</i></a>
          </div>
        </Col>
        </Row>
      </Carousel.Item>
<Carousel.Item className='projectsection my-4 py-4'>
<Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/jobscraper.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>Job Scraper for Nigerian Jobs</h2>
          <p >A Fullly Functional Website that Scrapes new job listings from various sources and organizes them in a tabular format where it can then be downloaded in various formats(CSV, Excel, PDF)</p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>Django</Badge>
            <Badge className='mx-2 bg-success my-2'>Python</Badge>
            <Badge className='mx-2 bg-success my-2'>Jquery</Badge>
            <Badge className='mx-2 bg-success my-2'>Bootstrap</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://scraper.cyberdata.ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>
        </Col>
</Row>
</Carousel.Item>
      <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/cyberdatahub.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>CYBER DATA HUB (Mobile App)</h2>
          <p >A Fullly Functional Virtual Top Up Application used for dispensig airtime, and data through automated means and APIs. Operational on Android and iOS devices.</p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>React Native</Badge>
            <Badge className='mx-2 bg-success my-2'>React</Badge>
            <Badge className='mx-2 bg-success my-2'>Javascript</Badge>
            <Badge className='mx-2 bg-success my-2'>Axios</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://play.google.com/store/apps/details?id=com.supervas.cyberdatahub" target="_blank" rel="noopener noreferrer"><i class="bi bi-google-play">Google Playstore (Android)</i></a>
          <a href="https://apps.apple.com/ng/app/cyber-data-hub/id6467631238" target="_blank" rel="noopener noreferrer"><i class="bi bi-apple">Apple App Store (iOS)</i></a>
          </div>
        </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/techhive.png" alt="View" className='todoimg '/></Col>
        <Col md="6">
          <h2>TechHive</h2>
          <p >Tech Hive, a dynamic tech community with its roots originating from Port Harcourt, Nigeria, was co-founded by myself and my close friend, Michael Olu. </p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>Django</Badge>
            <Badge className='mx-2 bg-success my-2'>Python</Badge>
            <Badge className='mx-2 bg-success my-2'>React</Badge>
            <Badge className='mx-2 bg-success my-2'>Bootstrap</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://techhive.ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>
        </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/developerscyberng.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
        <h2>CYBER NG</h2>
          <p >A Business Page Website for a Startup Tech Company</p>
          <ul className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>Django</Badge>
            <Badge className='mx-2 bg-success my-2'>Python</Badge>
            <Badge className='mx-2 bg-success my-2'>Javascript</Badge>
            <Badge className='mx-2 bg-success my-2'>HTML/CSS</Badge>
          </ul>
          <div className='codelinks'>
          <a href="https://developers.cyber.ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>

          
        </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/djangoreacttodoapp.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>TO DO APP</h2>
          <p >A simple ToDo application that carries out CRUD functionalities build with django in the backend and react for the frontend</p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>Django</Badge>
            <Badge className='mx-2 bg-success my-2'>Python</Badge>
            <Badge className='mx-2 bg-success my-2'>Javascript</Badge>
            <Badge className='mx-2 bg-success my-2'>React</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://github.com/robinokwanma/Django-ToDoApp" target="_blank" rel="noopener noreferrer"><i class="bi bi-github">View Code </i></a>
          <a href="https://cyber.ng/how-to-build-a-todo-app-with-django-and-react/" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>

          
        </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className='projectsection my-4 py-4'>
        <Row className='projectsection mx-3'>

        <Col md="6"><img src="/images/myportfolio.png" alt="View" className='todoimg'/></Col>
        <Col md="6">
          <h2>MY PORTFOLIO V2</h2>
          <p >My personal portfolio. Its a sigle page website with a lot of bootstrap. I'm still skeptic on making the code public. But hey you have demo right here and can make a personal request.😉</p>
          <div className='d-flex flex-wrap my-2'>
            <Badge className='mx-2 bg-success my-2'>React</Badge>
            <Badge className='mx-2 bg-success my-2'>Bootstrap</Badge>
            <Badge className='mx-2 bg-success my-2'>Javascript</Badge>
            <Badge className='mx-2 bg-success my-2'>HTML/CSS</Badge>
          </div>
          <div className='codelinks'>
          <a href="https://justrobin.dev" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye">Live Demo</i></a>
          </div>
        </Col>
        </Row>
      </Carousel.Item>
 
  
          </Carousel>
 
      </Container>
      <hr/>
    </div>
  )
}

export default PastProjects