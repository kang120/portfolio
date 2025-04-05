import './index.css'
import background from '../../asset/image/background.png';
import profile from "../../asset/image/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    const downloadPDF = () => {
        const pdfPath = "/resume.pdf";

        const link = document.createElement("a");
        link.href = pdfPath;
        link.setAttribute("download", "LeeWeiKang.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='w-full h-full relative flex items-end 2xl:px-64 xl:px-36 lg:px-20 overflow-x-hidden overflow-y-hidden'>
            <div className='w-96 h-96 absolute -right-10 -top-40 bg-blue-50 lg:opacity-90 opacity-0 rounded-full'></div>
            <div className='w-96 h-96 absolute right-28 -bottom-40 bg-blue-50 lg:opacity-90 opacity-0 rounded-full'></div>

            <div className='w-full h-5/6 relative flex items-start'>
                <div className='lg:w-1/2 w-full h-full lg:relative absolute lg:left-auto left-1/2 lg:translate-x-0 -translate-x-1/2 lg:block flex items-center justify-center'>
                    <img src={profile} className='h-full relative lg:opacity-40 opacity-10 z-50' />

                    <div className='w-96 h-96 absolute -left-32 -top-32 bg-blue-50 lg:opacity-90 opacity-0 rounded-full'></div>
                    <div className='w-60 h-60 absolute -left-40 bottom-32 bg-blue-50 lg:opacity-90 opacity-0 rounded-full'></div>
                    <div className='w-60 h-60 absolute left-1/2 -bottom-40 -translate-x-1/2 bg-blue-50 lg:opacity-90 opacity-0 rounded-full'></div>
                </div>

                <div className='lg:w-1/2 w-2/3 pt-24 lg:relative absolute lg:left-auto left-1/2 lg:translate-x-0 -translate-x-1/2 lg:text-left text-center'>
                    <div className='text-6xl font-bold'>Hello !</div>
                    <div className='mt-2 text-6xl font-bold'>I'm Wei Kang</div>
                    <div className='mt-4 text-xl font-bold text-indigo-400'>Software Engineer | Full Stack Developer</div>
                    <div className='mt-8'>
                        My name is Wei Kang. I'm a software developer who enjoys developing something cool.
                    </div>

                    <div className='mt-16'>
                        <button className='btn btn-md btn-blue-600' onClick={downloadPDF}>
                            <FontAwesomeIcon icon={faDownload} className='me-3' />
                            <span>Download Resume</span>
                        </button>
                    </div>

                    <div className='mt-4'>
                        <div className='flex items-center lg:justify-start justify-center'>
                            <a href="https://github.com/kang120" target="_blank" className='border rounded-full border-gray p-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faGithub} className='fa-xl' />
                            </a>

                            <a href="https://www.linkedin.com/in/weikang120/" target="_blank" className='border rounded-full border-gray p-2 ms-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='fa-xl' />
                            </a>

                            <a href="mailto:<leeweikang1220@gmail.com>" className='border rounded-full border-gray p-2 ms-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faEnvelope} className='fa-xl' />
                            </a>

                            <a href="https://www.facebook.com/xiaokang120/" target="_blank" className='border rounded-full border-gray p-2 ms-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;
