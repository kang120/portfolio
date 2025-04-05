import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { professionalExperiences } from '../../constants';
import './index.css'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {

    return (
        <div className="py-12">
            <div className="text-center text-3xl font-bold underline">Professional Experience</div>

            {
                professionalExperiences.map((el, index) => {
                    if (index % 2 == 0) {
                        if (index < professionalExperiences.length - 1) {
                            return (
                                <div className='relative lg:mt-20 mt-5 flex md:flex-row flex-col 2xl:gap-x-44 xl:gap-x-36 lg:gap-x-28 md:gap-x-10'>
                                    <div className='md:block hidden absolute top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2'></div>

                                    <div className='md:w-1/2 px-6 py-5 bg-gradient-to-r from-indigo-50 to-white rounded-xl border border-gray z-20 relative'>
                                        <div className='flex items-center text-slate-500 font-bold text-sm italic'>
                                            <div>{el.period}</div>

                                            <img src={el.companyImage} className='h-8 ms-auto' />
                                        </div>
                                        <div className='mt-4 font-semibold'>{el.company}</div>
                                        <div className='text-sm italic'>{el.location}</div>
                                        <div className='mt-2'>{el.position}</div>
                                        <div className='mt-4 text-sm'>
                                            <div className='font-bold underline'>Key Experience</div>
                                            {
                                                el.keyExperience.map(exp => (
                                                    <div className='mt-2 flex items-center'>
                                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                                        <div className='ms-3 text-sm'>{exp}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        {
                                            (index + 1 < professionalExperiences.length - 1 && (index / 2) % 2 >= 1) ?
                                                <div className='md:block hidden absolute w-0.5 h-1/2 bg-gray-200 bottom-0 left-1/2 translate-y-full z-10'></div>
                                                :
                                                null
                                        }
                                    </div>

                                    <div className='md:w-1/2 md:mt-0 mt-5 px-6 py-5 bg-gradient-to-l from-indigo-50 to-white rounded-xl border border-gray z-20 relative'>
                                        <div className='flex items-center text-slate-500 font-bold text-sm italic'>
                                            <div>{professionalExperiences[index + 1].period}</div>

                                            <img src={professionalExperiences[index + 1].companyImage} className='h-8 ms-auto' />
                                        </div>
                                        <div className='mt-4 font-semibold'>{professionalExperiences[index + 1].company}</div>
                                        <div className='text-sm italic'>{professionalExperiences[index + 1].location}</div>
                                        <div className='mt-2'>{professionalExperiences[index + 1].position}</div>
                                        <div className='mt-4 text-sm'>
                                            <div className='font-bold underline'>Key Experience</div>
                                            {
                                                professionalExperiences[index + 1].keyExperience.map(exp => (
                                                    <div className='mt-2 flex items-center'>
                                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                                        <div className='ms-3 text-sm'>{exp}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        {
                                            (index + 1 < professionalExperiences.length - 1 && (index / 2) % 2 < 1) ?
                                                <div className='md:block hidden absolute w-0.5 h-1/2 bg-gray-200 bottom-0 left-1/2 translate-y-full z-10'></div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            )
                        }
                        else if ((index / 2) % 2 < 1) {
                            return (
                                <div className='relative lg:mt-20 md:mt-10 flex gap-x-72'>
                                    <div className='w-1/2 px-6 py-5 bg-gradient-to-r from-indigo-50 to-white rounded-xl border border-gray z-20'>
                                        <div className='flex items-center text-slate-500 font-bold text-sm italic'>
                                            <div>{el.period}</div>

                                            <img src={el.companyImage} className='h-8 ms-auto' />
                                        </div>
                                        <div className='mt-4 font-semibold'>{el.company}</div>
                                        <div className='text-sm italic'>{el.location}</div>
                                        <div className='mt-2'>{el.position}</div>
                                        <div className='mt-4 text-sm'>
                                            <div className='font-bold underline'>Key Experience</div>
                                            {
                                                el.keyExperience.map(exp => (
                                                    <div className='mt-2 flex items-center'>
                                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                                        <div className='ms-3 text-sm'>{exp}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className='w-1/2 px-6 py-5'></div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='relative lg:mt-20 md:mt-10 flex gap-x-72'>
                                    <div className='w-1/2 px-6 py-5'></div>

                                    <div className='w-1/2 px-6 py-5 bg-gradient-to-l from-indigo-50 to-white rounded-xl border border-gray z-20'>
                                        <div className='flex items-center text-slate-500 font-bold text-sm italic'>
                                            <div>{el.period}</div>

                                            <img src={el.companyImage} className='h-8 ms-auto' />
                                        </div>
                                        <div className='mt-4 font-semibold'>{el.company}</div>
                                        <div className='text-sm italic'>{el.location}</div>
                                        <div className='mt-2'>{el.position}</div>
                                        <div className='mt-4 text-sm'>
                                            <div className='font-bold underline'>Key Experience</div>
                                            {
                                                el.keyExperience.map(exp => (
                                                    <div className='mt-2 flex items-center'>
                                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                                        <div className='ms-3 text-sm'>{exp}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}

export default Experience;
