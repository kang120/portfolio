import resume from './Resume.pdf'
import './index.css'

const Resume = () => {
    return (
        <div className='w-100 h-100 row bg-light'>
            <div className='section'>
                <div className='h-100'>
                    <iframe src={resume} width='100%' height='100%'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Resume;
