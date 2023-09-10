const Education = ({ educations }) => {
    return (
        <div className='row gx-4 gy-4 mt-4'>
            {
                educations.map(edu => (
                    <div className="col-md-4">
                        <div class={`card border-${edu['tag']} bg-light text-dark h-100`} style={{ maxWidth: '20rem;' }}>
                            <div class="card-header d-flex align-items-center education-card-header">
                                <div><span class={`badge bg-${edu['tag']}`}>{edu['level']}</span></div>
                                <div className="ms-3 education-school"><b>{edu['school']}</b></div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">{edu['course']}</h6>
                                <p class="card-text">{edu['location']}</p>
                                <p class="card-text">{edu['period']}</p>
                                <p class="card-text"><b>{edu['result']}</b></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Education;
