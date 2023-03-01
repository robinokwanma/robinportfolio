import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap';

function PastExperience() {
  return (
    <div className='my-3 py-3'>
      <Container>

        <h1>Experience</h1> 
        <p className='projectsection'>Here are some places i've worked</p>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Django Tutor/Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Loctech Training Institute</Card.Subtitle>
        <Card.Text>
          2021-2022
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Blogger & Technical Writer </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Techranter.com</Card.Subtitle>
        <Card.Text>
          2019-Date
        </Card.Text>

      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Web Developer/App Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">CYBER NG</Card.Subtitle>
        <Card.Text>
          2019-Date
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Freelance Technical Writer </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Strapi.io</Card.Subtitle>
        <Card.Text>
          2022-Date
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        </Row>
        </Container>
    <hr />
    </div>
  )
}

export default PastExperience