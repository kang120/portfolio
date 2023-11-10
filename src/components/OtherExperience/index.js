import { useEffect, useRef, useState } from 'react'
import './index.css'
import { otherExperiences } from '../../constants';

const OtherExperience = () => {

    return (
        <div>
            <div className='section'>
                <h3>Other Experience</h3>
                <div className='mt-4 px-2 d-flex flex-column'>
                    {
                        otherExperiences.map((exp, index) => (
                            <>
                                <div key={index} className="row p-5 align-items-center clear-pad-x">
                                    <div className='col-lg text-center'>
                                        <img src={`./image/experience_pic/${exp['experienceImg']}`} className="exp-pic-lg" />
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

export default OtherExperience;
