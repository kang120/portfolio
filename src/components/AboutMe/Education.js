const Education = ({ educations }) => {
    return (
        <div className='row gx-4 gy-4 mt-4'>
            {
                educations.map((edu, index) => (
                    <div key={index} className="col-md-4">
                        <div className={`card border-${edu['tag']} bg-light text-dark h-100`} style={{ maxWidth: '20rem;' }}>
                            <div className="card-header d-flex align-items-center education-card-header">
                                <div><span className={`badge bg-${edu['tag']}`}>{edu['level']}</span></div>
                                <div className="ms-3 education-school"><b>{edu['school']}</b></div>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{edu['course']}</h6>
                                <p className="card-text">{edu['location']}</p>
                                <p className="card-text">{edu['period']}</p>
                                <p className="card-text"><b>{edu['result']}</b></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Education;
