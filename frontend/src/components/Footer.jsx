import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const curentYear = new Date().getFullYear()
  return (

    <footer>
        <Container>
        <Row>
            <Col className='text-center py3'>
                <p>
                    ProShop &copy; {curentYear}
                </p>
            </Col>      
        </Row>
        </Container>
    </footer>
  )
}

export default Footer