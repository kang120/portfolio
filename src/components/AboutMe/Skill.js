const Skill = ({ skills }) => {
    return (
        <div className='row gx-5 gy-5 mt-1'>
            {
                skills.map((skill, index) => (
                    <div key={index} className='col-md-4'>
                        <SkillPicture picture={skill['picture']} />
                        <h6 className='mt-2'>{skill['name']}</h6>
                        <SkillProfiency proficiency={skill['proficiency']} skillName={skill['name']} />
                    </div>
                ))
            }
        </div>
    )
}

const SkillPicture = ({ picture }) => {
    if (Array.isArray(picture)) {
        return (
            <div className='d-flex'>
                {
                    picture.map((pic, index) => (
                        <img key={index} className='skill-icon me-1' src={require(`./skill_pic/${pic}`)} />
                    ))
                }
            </div>
        )
    } else {
        return (
            <img className='skill-icon' src={require(`./skill_pic/${picture}`)} />
        )
    }
}

const SkillProfiency = ({ proficiency, skillName }) => {
    if (Array.isArray(proficiency)) {
        return (
            <>
                {
                    proficiency.map((pro, index) => (
                        <div key={index} className={`progress ${index > 0 ? 'mt-1' : ''}`} style={{ height: '10px' }}>
                            <div className={`progress-bar progress-bar-striped bg-${pro >= 75 ? 'danger' : pro >= 50 ? 'warning' :
                                pro >= 25 ? 'info' : 'success'}`} role="progressbar" style={{ width: `${pro}%` }}
                                aria-valuenow={`${pro}`} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    ))
                }
            </>
        )
    } else {
        return (
            <div className="progress" style={{ height: '10px' }}>
                <div className={`progress-bar progress-bar-striped bg-${proficiency >= 75 ? 'danger' : proficiency >= 50 ? 'warning' :
                    proficiency >= 25 ? 'info' : 'success'}`} role="progressbar" style={{ width: `${proficiency}%` }}
                    aria-valuenow={`${proficiency}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }
}

export default Skill;
