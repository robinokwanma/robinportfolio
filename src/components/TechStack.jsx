import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import '../styling/TechStack.css';

function TechStack() {
  const skills = [
    { path: "/images/react.png", title: "React/React Native", class: "Reactimg" },
    { path: "/images/python.png", title: "Python", class: "pythonimg" },
    { path: "/images/html.png", title: "HTML", class: "htmlimg" },
    { path: "/images/django.png", title: "Django", class: "djangoimg" },
    { path: "/images/BootstrapImage.png", title: "BootStrap", class: "bootstrapimg" },
    { path: "/images/redux.png", title: "Redux", class: "reduximg" },
    { path: "/images/JavaScript.png", title: "Javascript", class: "jsimg" },
    { path: "/images/wordpress.png", title: "Wordpress", class: "wpimg" },
    { path: "/images/SEO.png", title: "SEO", class: "seoimg" },
    { path: "/images/technicalwriting.png", title: "Technical Writing", class: "twimg" },
    { path: "/images/Aws.png", title: "AWS", class: "awsimg" },
    { path: "/images/css.png", title: "CSS", class: "cssimg" }
  ];

  return (
    <div className="techstackview my-4 py-4 text-center">
      <h1>Skills</h1>
      <Container className='my-3 py-3'>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} md={3} xs={6} className="mb-4 d-flex justify-content-center">
              <Card className="skill-card h-100 text-center">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Img variant="top" src={skill.path} alt={skill.title} className={`${skill.class} mx-auto py-2`} />
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TechStack;
