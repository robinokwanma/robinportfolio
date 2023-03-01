import React from 'react'

import { Row, Col, Container} from 'react-bootstrap';

function TechStack() {
  return (

    <div className="techstackview my-4 py-4 justify-content-center text-center">
        <h1>Skills</h1>
        <Container className='my-4 py-4' fluid>
            <Row>
                <Col>
                <img src="/images/react.png" alt="React" className='Reactimg'/>
                <p>React/React Native</p>
                </Col>
                <Col>
                <img src="/images/python.png" alt="python" className='pythonimg'/>
                <p>Python</p>
                </Col>
                <Col>
                <img src="/images/html.png" alt="HTML" className='htmlimg'/>
                 <p>HTML</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src="/images/django.png" alt="Django" className='djangoimg'/>
                <p>Django</p>
                </Col>
                <Col>
                <img src="/images/BootstrapImage.png" alt="BootStrap" className='bootstrapimg'/>
                <p>BootStrap</p>
                </Col>
                <Col>
                <img src="/images/redux.png" alt="Redux" className='reduximg'/>
                <p>Redux</p></Col>

            </Row>
            <Row>
                <Col>
                <img src="/images/JavaScript.png" alt="Javascript" className='jsimg'/>
                <p>Javascript</p>
                </Col>
                <Col>
                <img src="/images/wordpress.png" alt="Wordpress" className='wpimg'/>
                 <p>Wordpress</p>
                </Col>
                <Col>
                <img src="/images/SEO.png" alt="SEO" className='seoimg'/>
                <p>SEO</p>
                </Col>

            </Row>
            <Row>
            <Col>
                <img src="/images/technicalwriting.png" alt="Technical Writing" className='twimg'/>
                <p>Technical Writing</p>
                </Col>
                <Col>
                <img src="/images/Aws.png" alt="AWS" className='awsimg'/>
                <p>AWS</p>
                </Col>
                <Col>
                <img src="/images/css.png" alt="CSS" className='cssimg'/>
                <p>CSS</p>
                </Col>
            </Row>
            </Container>
    </div>
  )
}

export default TechStack;