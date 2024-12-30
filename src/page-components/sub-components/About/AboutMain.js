import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { WebUrl } from '../../../BaseUrl';

const AboutMain = () => {

    const aboutfirms = useSelector(state => state.SliceData.aboutfirms);
    const aboutteam = useSelector(state => state.SliceData.aboutteam);
    const aboutads = useSelector(state => state.SliceData.aboutads);

    return (
        <>
            <section className="firm-boxes">

                <div className="container py-rat">
                    <div className="main-title text-center">
                        <h2>Different where it matters. Finatical where it counts.</h2>

                    </div>
                    <div className="row">
                        {aboutfirms?.map((aboutfirm, index) => (
                            <div className="col-md-4 firm-pad" key={index}>
                                <div className="firm-head">
                                    <Link className="firm-link" to="">
                                        <h3 className="firm-title">{aboutfirm?.title}</h3>
                                    </Link>
                                </div>
                                <p>{aboutfirm?.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* <!-- climate section starts --> */}

            <section className="climate">
                <div className="container">
                    <div className="row border-1">
                        <div className="col-lg-6 my-auto p-4 order-lg-1 order-2">

                            <div className="climate-text ">
                                <h2 className="climate-head">{aboutads?.title}</h2>
                                <p className="climate-para mb-4">{aboutads?.content}</p>

                                <Link to="" className="climate-link">LEARN MORE</Link>

                            </div>
                        </div>
                        <div className="col-lg-6 p-0 order-lg-2 order-1">
                            <div className="climate-img">
                                <img width="100%" src={`${WebUrl}/${aboutads?.image}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- climate section ends --> */}

            {/* <!-- our people starts --> */}
            <section className="people-boxes">

                <div className="container py-rat">
                    <div className="main-title text-center">
                        <h2>Our People</h2>

                    </div>
                    <div className="row">

                        {aboutteam?.map((aboutteam, index) => (
                            <div className="col-lg-3 col-md-4 col-6 firm-pad" key={index}>
                                <div className="team-profile h-100 shaddow border-r">
                                    <div className="people-img">
                                        <img src={`${WebUrl}/${aboutteam?.image}`} width="100%" alt="" />
                                    </div>
                                    <div className="people-desc text-center p-2">
                                        <h5>{aboutteam?.name}</h5>
                                        <p>{aboutteam?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* <!-- our people ends --> */}
        </>
    )
}

export default AboutMain