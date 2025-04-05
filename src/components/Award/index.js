import './index.css'
import { awards } from '../../constants';

const Award = () => {

    return (
        <div>
            <div className="section">
                <h3 className='text-dark'>Award</h3>
                <div className='mt-4'>
                    {
                        awards.map((award, index) => (
                            <>
                                <div key={index} className="row mt-5 align-items-center p-5 clear-pad-x">
                                    <div className='col-lg text-center'>
                                        <h3>{award['name']}</h3>
                                        <p className='mt-4'>{award['description']}</p>
                                    </div>

                                    <div className="col-lg text-center">
                                        <img src={require(`./award_pic/${award['awardImg']}`)} className="award-pic" />
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

export default Award;
