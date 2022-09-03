import { Container, Row, Col } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import '../../assets/css/skill.css';

const Skill = () => {
    const generalSkills = ['Software Engineering', 'Web Development', 'Frontend', 'Backend', 'Machine Learning',
        'Research', 'Fast Prototyping']

    const engineeringSkills = ['Java', 'Python', 'JavaScript', 'C++', 'PHP', 'React', 'Nodejs', 'MySQL', 'GraphQL']

    return (
        <div id='skill' className='section-container'>
            <h1 className='text-center fw-bold section-title'>Skills</h1>
            <Container className='position-relative container-v'>
                <Row>
                    <Col sm={6}>
                        <h2 className='fs-3 fw-light text-center mb-4'>General</h2>
                        <div className='d-flex w-100 skill-container justify-content-center'>
                            {generalSkills.map((skill, index) => (
                                <h5 key={index} className='skill-badge'><Badge bg='secondary' className='px-3'>{skill}</Badge></h5>
                            ))}
                        </div>
                    </Col>
                    <Col sm={6}>
                    <h2 className='fs-3 fw-light text-center mb-4'>Engineering</h2>
                        <div className='d-flex w-100 skill-container justify-content-center'>
                            {engineeringSkills.map((skill, index) => (
                                <h5 key={index} className='skill-badge'><Badge bg='secondary' className='px-3'>{skill}</Badge></h5>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skill;