import { Row, Col, Container, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro '>
            <Container className='text-white text-center d-flex justify-content-center align-items-center '>
                <Row>
                    <Col>
                        <div className='title'>Free Movies, </div>
                        <div className='title'>No Ticket</div>
                        <div className='introButton mt-4 text-center'>
                            <Button variant='dark'>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro