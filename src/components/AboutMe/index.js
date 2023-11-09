import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../asset/img/me6.png'
import './index.css'
import { faBasketball, faBowlingBall, faChess, faDesktop, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill';
import Education from './Education';

const AboutMe = () => {
    const age = new Date().getFullYear() - 2001;
    const nationality = "Malaysia";
    const email = "leeweikang1220@gmail.com";

    const skills = [
        {
            name: 'Nodejs',
            proficiency: 60,
            picture: 'nodejs2.png'
        },
        {
            name: 'React, Angular, Vue',
            proficiency: [80, 20, 20],
            picture: ['react2.png', 'angular2.png', 'vue2.png']
        },
        {
            name: 'Bootstrap, Sass',
            proficiency: [80, 60],
            picture: ['bootstrap2.png', 'sass2.png']
        },
        {
            name: 'REST API, GraphQL',
            proficiency: [70, 40],
            picture: ['rest2.png', 'graphql2.png']
        },
        {
            name: 'CodeIgniter',
            proficiency: 60,
            picture: ['codeigniter2.png']
        },
        {
            name: 'Django, Flask',
            proficiency: [30, 20],
            picture: 'python2.png'
        },
        {
            name: 'ASP.NET',
            proficiency: 20,
            picture: 'csharp.png'
        }
    ]

    const languages = [
        {
            name: 'Chinese',
            proficiency: '9/10'
        },
        {
            name: 'English',
            proficiency: '7/10'
        },
        {
            name: 'Malay',
            proficiency: '6/10'
        }
    ]

    const educations = [
        {
            school: 'Multimedia University',
            level: "Bachelor's Degree",
            tag: 'primary',
            course: 'Bachelor of Computer Science Hons Artificial Intelligence',
            location: 'Malacca, Malaysia',
            period: '2020 - 2023',
            result: 'CGPA: 3.89'
        },
        {
            school: 'Multimedia University',
            level: "Foundation",
            tag: 'secondary',
            course: 'Foundation in Information Technology',
            location: 'Malacca, Malaysia',
            period: '2019 - 2020',
            result: 'CGPA: 3.91'
        },
        {
            school: 'SMK Taman Universiti',
            level: "Secondary",
            tag: 'danger',
            course: 'SPM',
            location: 'Johor Bahru, Malaysia',
            period: '2014 - 2018',
            result: 'Result: 5A+ 5A'
        },
        {
            school: 'SJK(C) Pu Sze',
            level: "Primary",
            tag: 'info',
            course: 'UPSR',
            location: 'Johor Bahru, Malaysia',
            period: '2008 - 2013',
            result: 'Result: 6A'
        }
    ]

    const hobbies = [
        {
            name: 'Body building',
            icon: faDumbbell
        },
        {
            name: 'Chess',
            icon: faChess
        },
        {
            name: 'Bowling',
            icon: faBowlingBall
        },
        {
            name: 'Basketball',
            icon: faBasketball
        },
        {
            name: 'Programming',
            icon: faDesktop
        }
    ]

    const labels = [
        {
            name: 'Fast learner'
        },
        {
            name: 'Complete work in time'
        },
        {
            name: 'Well time management'
        }
    ]

    return (
        <div className='w-100'>
            <div className='d-flex align-items-center top bg-light'>
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

            <div className='section text-start'>
                <h3 className='text-dark'>Skills</h3>
                <Skill skills={skills} />
            </div>

            <div className='section text-start'>
                <h3 className='text-dark'>Education</h3>
                <Education educations={educations} />
            </div>

            <div className='section'>
                <div className='row gx-5 gy-5 justify-content-between'>
                    <div className='col-md-4 text-start'>
                        <h3 className='text-dark'>Languages</h3>
                        <ul className='list-group mt-4'>
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

                    <div className='col-md-6 text-start'>
                        <h3 className='text-dark'>Hobbies</h3>
                        <div className='mt-4 row gy-3'>
                            {
                                hobbies.map((hob, index) => (
                                    <div key={index} className="text-dark d-flex align-items-center">
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
    )
}



export default AboutMe;
