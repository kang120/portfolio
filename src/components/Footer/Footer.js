import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/footer.css'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const email = 'leeweikang1220@gmail.com';

    const contacts = [
        {
            icon: faGithub,
            link: 'https://github.com/kang120'
        },
        {
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/weikang120/'
        },
    ]

    return (
        <div className='inner-spacing footer-container'>
            <h1 className='email fw-bold'>{email}</h1>
            <h4 className='mt-5 fw-light'>Get in touch with me</h4>
            <div className='mt-4 d-flex align-items-center w-100 icons-row'>
                {contacts.map((contact, index) => (
                    <a key={index} className='contact-link' href={contact.link} target='_blank'>
                        <FontAwesomeIcon className='contact-icon' icon={contact.icon} size='2x' />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;