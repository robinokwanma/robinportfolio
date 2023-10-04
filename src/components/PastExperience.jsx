import React from 'react';
import { Row, Col, Container, Badge, Button, Card } from 'react-bootstrap';
import '../styling/PastExperience.css';

function PastExperience() {
    return (
        <div className='my-3 py-3'>
            <h1 className='text-center'>Experience</h1>
            <p className='projectsection text-center'>Here are some places I've worked</p>
            <Container className='timeline'>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        {[
                            {
                                title: "Mobile Engineer",
                                subtitle: "Ebony Technology",
                                description: "Ebony Technology is a UK tech company creating digital solutions that support businesses and organisations across the world to launch, run and grow. Our team comprises business-minded professionals with expertise in software engineering, UI/UX design, web and mobile development, growth hacking, database system administration, cyber security, digital marketing and entrepreneurship.",
                                footer: "July 2023- Date",
                                imgSrc: "/images/ebonytech.jpg",
                                badges: ["React-Native", "Expo", "Mobile", "Axios", "iOS"],
                                link: "https://ebonytechnology.co.uk/"
                            },
                            {
                                title: "Co-Founder",
                                subtitle: "Tech Hive Nigeria",
                                description: "Tech Hive, a dynamic tech community with its roots originating from Port Harcourt, Nigeria, was co-founded by myself and my close friend, Michael Olu. Boasting a membership of over 100 tech enthusiasts spanning the globe, our community is dedicated to fostering knowledge sharing, networking, and skill development. Together as co-founders, Michael and I have created a collaborative space that empowers individuals to thrive in the dynamic tech landscape",
                                footer: "March 2023- Date",
                                imgSrc: "/images/techhivelooo.webp",
                                badges: ["Leadership", "Community", "Collaboration"],
                                link: "https://techhive.ng/our-founders"
                            },
                            {
                                title: "Technical Writer",
                                subtitle: "TechRanter",
                                description: "TechRanter is a Nigerian technology blog that provides news, reviews, and opinion pieces on the latest gadgets and trends. They have a strong online presence, with a well-designed website and a presence on social media.",
                                footer: "March 2023- Date",
                                imgSrc: "/images/techranterport.png",
                                badges: ["Research", "GitHub", "Writing"],
                                link: "https://techranter.com"
                            },
                            {
                                title: "Mobile Engineer",
                                subtitle: "Cyber Data Hub",
                                description: "Cyber Data Hub is the Number 1 VTU platform in Nigeria with a wide range of services available for user consumption.",
                                footer: "February 2022- February 2023",
                                imgSrc: "/images/cyberlogolightmode.png",
                                badges: ["React-Native", "Expo", "Mobile", "Axios", "iOS"],
                                link: "https://cyberdata.ng"
                            },
                            {
                                title: "Blogger",
                                subtitle: "CYBER NG",
                                description: "A leading Information Dome in the Nigerian web space. CYBER NG offers the latest updates on news in Nigeria , Africa and all over the world.",
                                footer: "March 2023- Date",
                                imgSrc: "/images/cyberngport.jpg",
                                badges: ["Wordpress", "Writing", "SEO", "Research"],
                                link: "https://cyber.ng"
                            },
                            // ... Add other experiences in the same format
                        ].map((experience, index) => (
                            <div className='timeline-item' key={index}>
                                <Card  className='timeline-card'>
                                  <Card.Body>

                                    <div className="card-header">
                                        <img src={experience.imgSrc} alt={experience.subtitle} className="organization-logo"/>
                                        <div>

                                        <Card.Title>{experience.title}</Card.Title>
                                        <Card.Subtitle className="text-muted">{experience.subtitle}</Card.Subtitle>
                                        </div>
                                    </div>
                                    <p>{experience.description}</p>
                                    {experience.badges && (
                                        <div className="badges">
                                            {experience.badges.map(badge => (
                                                <Badge className='mx-2 bg-success' key={badge}>{badge}</Badge>
                                            ))}
                                        </div>
                                    )}
                                    <Card.Footer className="footer">{experience.footer}</Card.Footer>
                                    <Button variant="success" href={experience.link} target="_blank">Visit Site</Button>
                                  </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
            <hr />
        </div>
    );
}

export default PastExperience;
