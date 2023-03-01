import React from 'react'
import {Row, Col, Container}  from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Profile() {
  return (
    <div className=' py-3 my-3'>
        <Container className=' py-4 my-4' fluid>
        <Row>
            <Col md='6'>
            <h1>Hi, I'm Robin.</h1>
            <p className='projectsection'>I build things for the web, and i love writing about it too.</p>
            <br />
            <ul style={{'list-style-type' : "none", 'fontSize': '1.3em'}}>
                <li>FullStack Web Developer <i className="bi bi-code-slash"></i></li>
                <li>App Developer <i class="bi bi-google-play"></i> <i class="bi bi-apple"></i></li>
                <li>Technical Writer <i className="bi bi-pen"></i> </li>
            </ul>
        <div>
            <Link to='/resume/Robinresume.pdf' className='btn btn-success my-3 py-3 ml-2' target={'_blank'} download>Download Resume <i className="bi bi-file-earmark-person-fill"></i></Link>
            <p>Email- robinokwanma@gmail.com</p>
            </div>

            </Col>
            <Col md='6'>
                <div>

            <img src="images/hackermode.jpg" alt="Just me smiling" className='robinpic'/>
                </div>
            </Col>
        </Row>
        <hr />
        </Container>

    </div>
  )
}

export default Profile