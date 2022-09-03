import { Container, Row, Col } from "react-bootstrap";
import '../../assets/css/experience.css';

const Experience = () => {
    const experiences = [
        {
            companyName: 'Ounch Sdn Bhd',
            jobTitle: 'Software Engineer Part Time',
            duration: 'Sep 2022 - PRESENT'
        },
        {
            companyName: 'Ounch Sdn Bhd',
            jobTitle: 'Software Engineer Intern',
            duration: 'May 2022 - Aug 2022'
        },
        {
            companyName: 'Multimedia University',
            jobTitle: 'Voluntary Research Assistant',
            duration: 'Oct 2021 - Dec 2021'
        }
    ]

    return (
        <div id='experience' className='section-container'>
            <h1 className='text-center fw-bold section-title'>Experience</h1>
            <Container className='d-flex align-items-center justify-content-center position-relative pt-5'>
                <div className='experience-timeline'>
                    {experiences.map((exp, index) => (
                            <div key={index} className="experience-box">
                                <div className='fs-4 fw-light'>{exp.companyName}</div>
                                <div className='fs-6 fw-lighter text-secondary mt-1'>{exp.duration}</div>
                                <div className='fs-5 fw-light mt-3'>{exp.jobTitle}</div>
                            </div>
                    ))} 
                </div>
            </Container>
        </div>
    )
}

export default Experience;