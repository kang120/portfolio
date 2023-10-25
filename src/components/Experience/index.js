import { useEffect, useRef, useState } from 'react'
import './index.css'

const Experience = () => {
    const experiences = [
        {
            company: 'Tiong Nam Logistics Holdings Berhad',
            position: 'Software Engineer',
            period: 'Oct 2023 - Present',
            skill: ['PHP', 'React', 'Angular', 'Nodejs'],
            skillImg: ['php2.png', 'react2.png', 'angular2.png', 'nodejs2.png'],
            experienceImg: 'tiongnam.png'
        },
        {
            company: 'Ounch Sdn Bhd',
            position: 'Software Engineer',
            period: 'Sep 2022 - May 2023',
            skill: ['JavaScript', 'React', 'Nodejs', '3D Modeling'],
            skillImg: ['javascript2.png', 'react2.png', 'nodejs2.png', '3d2.png'],
            experienceImg: 'ounch.png'
        },
        {
            company: 'Ounch Sdn Bhd',
            position: 'Software Engineer Intern',
            period: 'May 2022 - Aug 2022',
            skill: ['JavaScript', 'React', 'Nodejs', 'GraphQL'],
            skillImg: ['javascript2.png', 'react2.png', 'nodejs2.png', 'graphql2.png'],
            experienceImg: 'ounch.png'
        },
        {
            company: 'Multimedia University',
            position: 'Research Assistant',
            period: 'Nov 2021 - Dec 2021',
            skill: ['PHP', 'CodeIgniter'],
            skillImg: ['php.png', 'codeigniter2.png'],
            experienceImg: 'mmu.png'
        }
    ]

    const otherExperiences = [
        {
            company: 'IPG Realty',
            position: 'Property Agent',
            experienceImg: 'property.png'
        },
        {
            company: 'De Largo',
            position: 'Bartender',
            experienceImg: 'delargo.png'
        }
    ]

    return (
        <div>
            <div className='section'>
                <h3 className='text-dark'>Experience</h3>
                <div className='mt-4'>
                    {
                        experiences.map((exp, index) => (
                            <div key={index} className="row gx-5 mt-5">
                                <div className='col-lg-3 text-center'>
                                    <img src={require(`./experience_pic/${exp['experienceImg']}`)} className="exp-pic" />
                                </div>

                                <div className='col exp-details'>
                                    <h4>{exp['company']}</h4>
                                    <h6>{exp['position']}</h6>
                                    <span>{exp['period']}</span>

                                    <ExperienceSkill skills={exp['skill']} skillImg={exp['skillImg']} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='section'>
                <h3>Other Experience</h3>
                <div className='mt-4 px-2 d-flex flex-column'>
                    {
                        otherExperiences.map((exp, index) => (
                            <>
                                <div key={index} className="row p-5 align-items-center clear-pad-x">
                                    <div className='col-lg text-center'>
                                        <img src={require(`./experience_pic/${exp['experienceImg']}`)} className="exp-pic-lg" />
                                    </div>

                                    <div className='col-lg exp-details text-center exp2-details'>
                                        <h4>{exp['company']}</h4>
                                        <h6>{exp['position']}</h6>
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))
                    }
                </div>
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
                        <img src={require(`./skill_pic/${skillImg[index]}`)} className='skill-icon' />
                        <p className='text-dark'><b><small>{skill}</small></b></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Experience;
