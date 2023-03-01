import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Container>
        <Row>
            <Col className="text-center py-3">
                Designed With 💓 by &copy; Robin Okwanma
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer