import React from 'react'
import { Row, Col} from 'react-bootstrap';

function FollowIcons() {
  return (

        <div className='py-3 codelinks'>   
                 
                <Row>
                  <Col ><a href="https://facebook.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></Col>
                  <Col><a href="https://twitter.com/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></Col>
                  <Col><a href="https://linkedin.com/in/robinokwanma" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></Col>
                  <Col><a href="https://wa.me/2348148190856" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a></Col>
                </Row>

        </div>

  )
}

export default FollowIcons