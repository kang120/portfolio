import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../asset/img/me7.jpeg'
import './index.css'
import Skill from './Skill';
import Education from './Education';
import Experience from './Experience';
import { experiences, otherExperiences, educations, hobbies, languages, skills } from '../../constants';

const AboutMe = () => {
    const age = new Date().getFullYear() - 2001;
    const nationality = "Malaysia";
    const email = "leeweikang1220@gmail.com";


    return (
        <div className='w-100'>
            <div className='d-flex align-items-center top bg-light box-shadow'>
                <img src={profile} className='profile-pic' />
                <div className='ms-6 d-flex flex-column align-items-start details'>
                    <h1 className='text-dark'><b>Lee Wei Kang</b></h1>
                    <table className='text-start'>
                        <tr>
                            <td className='text-dark pt-2'><b>Age: </b></td>
                            <td className='ps-3 pt-2'>{age}</td>
                        </tr>
                        <tr>
                            <td className='text-dark pt-2'><b>Nationality: </b></td>
                            <td className='ps-3 pt-2'>{nationality}</td>
                        </tr>
                        <tr>
                            <td className='text-dark pt-2'><b>Email: </b></td>
                            <td className='ps-3 pt-2'>{email}</td>
                        </tr>
                    </table>
                    <a id='resume-btn' className='btn btn-dark mt-4' href="/resume">View Resume</a>
                </div>
            </div>

            <div className='pt-5'>
                <div className='section text-start'>
                    <h4 className='text-primary fw-bold text-center'>Skills</h4>
                    <Skill skills={skills} />
                </div>

                <div className='section text-start'>
                    <h4 className='text-primary fw-bold text-center'>Experiences</h4>
                    <Experience experiences={experiences} otherExperiences={otherExperiences} />
                </div>

                <div className='section text-start'>
                    <h4 className='text-primary fw-bold text-center'>Educations</h4>
                    <Education educations={educations} />
                </div>


                <div className='section'>
                    <div className='row gx-5 gy-5 justify-content-between'>
                        <div className='col-md-4 text-start md-text-center'>
                            <h4 className='text-primary fw-bold'>Languages</h4>
                            <ul className='list-group py-5'>
                                {
                                    languages.map((lan, index) => (
                                        <li key={index} className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                                            {lan['name']}
                                            <span className='badge bg-primary rounded-pill'>{lan['proficiency']}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='col-md-6 text-start md-text-center d-flex flex-column md-align-items-center'>
                            <h4 className='text-primary fw-bold'>Hobbies</h4>
                            <div className='py-5 d-flex flex-column'>
                                {
                                    hobbies.map((hob, index) => (
                                        <div key={index} className="py-1 text-dark d-flex align-items-center">
                                            <FontAwesomeIcon icon={hob['icon']} className='fa-2xl fa-fw' />
                                            <div className='ms-4'>{hob['name']}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;
