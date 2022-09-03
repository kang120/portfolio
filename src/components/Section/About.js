import { Container, Row, Col } from "react-bootstrap";
import '../../assets/css/about.css'

const About = () => {
    const aboutme = `
        I am a Web Developer with a passion in web development. 
        Like to develop a functional and user-friendly UI. 
        Self learner with a quick learning ability.
    `
    return (
        <Container id='about-me'>
            <Row>
                <Col md={6}>
                
                </Col>
                <Col md={6} className='about-text'>
                    <b className='fs-1'>Hi, I'm Wei Kang</b>
                    <p className='fs-5 mt-5'>{aboutme}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;