import React from 'react'
import {Row, Col, Container}  from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FollowIcons from './FollowIcons'


function Profile() {
  return (
    <div className=' py-3 my-3'>
        <Container className=' py-4 my-4' fluid>
        <Row>
            <Col md='6'>
            <h1>Hi, I'm Robin.</h1>
            <p className='projectsection'>From Dynamic Websites to Intuitive Mobile Applications, I build it all. And guess what? I write about these adventures as well😉.</p>
            <ul style={{'list-style-type' : "none", 'fontSize': '1.3em'}}>
                <li>Software Engineer <i className="bi bi-code-slash"></i> <i class="bi bi-google-play"></i> <i class="bi bi-apple"></i></li>
                <li>Technical Writer <i className="bi bi-pen"></i> </li>
            </ul>
        <div>
            <Link to='/resume/Robinresume.pdf' className='btn btn-success my-3 py-3 ml-2' target={'_blank'} download>Download Resume <i className="bi bi-file-earmark-person-fill"></i></Link>
            <p>Email- robinokwanma@gmail.com</p>
            <h4 className='justify-content-left'><FollowIcons/></h4>
            </div>

            </Col>
            <Col md='6'>
                <div>

            <img src="images/hackermode.svg" alt="Just me smiling" className='robinpic'/>
                </div>
            </Col>
        </Row>
        <hr />
        </Container>

    </div>
  )
}

export default Profile