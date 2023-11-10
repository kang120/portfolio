const Education = ({ educations }) => {
    return (
        <div className="py-5 px-4 d-flex justify-content-center">
            <div className="timeline timeline-right w-75">
                {
                    educations.map((edu, index) => (
                        <div key={index} className="timeline-row pb-3 w-100">
                            <div className="dot border-primary bg-primary"></div>
                            <div className="v-line"></div>

                            <div className="border rounded px-4 py-3 box-shadow timeline-container w-100">
                                <div className='arrow border border-3'></div>
                                <div className="row">
                                    <h6 className="col-sm text-primary fw-bold">{edu['period']}</h6>
                                    <div className="col-sm text-end clear-text-align">
                                        <span className={`badge rounded-pill text-bg-${edu['tag']}`}>{edu['level']}</span>
                                    </div>
                                </div>
                                <h6 className="mt-3 education-school fw-bold">{edu['school']}</h6>
                                <p>{edu['location']}</p>
                                <h6 className="card-title">{edu['course']}</h6>
                                <h6 className="fw-bold mt-2">{edu['result']}</h6>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education;
