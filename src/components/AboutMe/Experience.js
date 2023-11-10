import './index.css'

const Experience = ({ experiences, otherExperiences }) => {

    return (
        <div className='py-5 px-4 d-flex justify-content-center'>
            <div className="timeline timeline-left w-75">
                {
                    experiences.map((exp, index) => (
                        <div key={index} className="timeline-row pb-3 w-100">
                            <div className="dot border-primary bg-primary"></div>
                            <div className="v-line"></div>

                            <div key={index} className="timeline-container w-100">
                                <div className="border rounded px-4 py-3 box-shadow">
                                    <div className='row align-items-center'>
                                        <div className='col-md-4 p-2 order-md-2'>
                                            <img src={`image/experience_pic/${exp['experienceImg']}`} className="exp-pic" />
                                        </div>

                                        <div className='col-md-8 order-md-1'>
                                            <h6 className='text-primary fw-bold'>{exp['period']}</h6>
                                            <h6 className="mt-3 fw-bold">{exp['company']}</h6>
                                            <h6>{exp['position']}</h6>

                                            <div className='mt-3'>
                                                <strong>Skills: </strong>
                                                {exp['skill'].join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const ExperienceSkill = ({ skills, skillImg }) => {
    return (
        <div className='d-flex align-items-center skill-row mt-4'>
            {
                skills.map((skill, index) => (
                    <div key={index} className={`text-center ${index > 0 ? 'ms-4' : ''}`}>
                        <img src={`./image/skill_pic/${skillImg[index]}`} className='skill-icon' />
                        <p className='text-dark'><b><small>{skill}</small></b></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Experience;
