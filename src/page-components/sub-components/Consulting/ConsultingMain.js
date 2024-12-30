import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingMain = () => {
  return (
    <>
    
    <section className="contact-office cot-1">
        {/* <!-- <div className="container"> --> */}
            <div className="row">
                <div className="col-lg-6 ps-0 pe-0">
                    <img src="assets/Images/Home-8-img-1.jpg" alt=""/>
                </div>
                <div className="col-lg-6 my-auto ">
                    <div className="head-txt  dark-head-txt p-5">
                        <div className="head">
                            <p className="first">
                                The Best Professional team
                            </p>
                            
                        </div>
                        <div className="main-title consult-main">
                            <h2>The Best Way to Boost Your Potential</h2>
                            <p>Working closely with the World Economic Forum and senior executives from 40 global companies, we have
                                developed an end-to-end approach to transform your digital enterprise.</p>
                        </div>
                        <div className="wl-btn">

                            <Link className="welcome-btn" to="contact.html">
                                Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>
               
            </div>


            {/* <!-- <div className="head-large-2">
                <span>OFFICES</span>
            </div> --> */}
        {/* <!-- </div> --> */}
    </section>
    
    <section className="contact-office cot-1">
        {/* <!-- <div className="container"> --> */}
            <div className="row">
                <div className="col-lg-6 my-auto ">
                    <div className="head-txt  dark-sm-head-txt p-5">
                        <div className="head">
                            <p className="first">
                                Checkout
                            </p>
                            
                        </div>
                        <div className="main-title consult-main">
                            <h2>Our Businesses</h2>
                            <p>Working closely with the World Economic Forum and senior executives from 40 global companies, we have
                                developed an end-to-end approach to transform your digital enterprise.</p>
                        </div>
                        <div className="business-li">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="li-part-1">
<li>Quick business execution</li>
<li>Quick business execution</li>
<li>Quick business execution</li>
<li>Quick business execution</li>
                                    </ul>

                                </div>
                                <div className="col-md-6">
                                    <ul className="li-part-2">
                                        <li>Quick business execution</li>
<li>Quick business execution</li>
<li>Quick business execution</li>
<li>Quick business execution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="wl-btn">

                            <Link className="welcome-btn" to="contact.html">
                                Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 ps-0">
                    <img src="assets/Images/Home-8-img-1.jpg" alt=""/>
                </div>
            </div>


            {/* <!-- <div className="head-large-2">
                <span>OFFICES</span>
            </div> --> */}
        {/* <!-- </div> --> */}
    </section>
    <section className="contact-office cot-1">
        {/* <!-- <div className="container"> --> */}
            <div className="row">
                <div className="col-lg-6 pe-0 order-lg-1 order-2">
                    <img src="assets/Images/Home-8-img-1.jpg" alt=""/>
                </div>
                <div className="col-lg-6 my-auto order-lg-2 order-1">
                    
                    <div className="container p-4">

                        <div className="accordion" id="myAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button type="button" className="accordion-button collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne">Are there any discounts included?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                    data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Nur anhand der Vor-Ort-Besichtigung können wir genau abschätzen, was Sie
                                            in welchem
                                            Umfang entrümpeln und entsorgen möchten. Gemeinsam können wir den
                                            genauen
                                            <strong>zeitlichen Ablauf der Entrümpelung</strong> besprechen und
                                            Fragen klären.
                                            Unser
                                            Mitarbeiter kann Sie auf diese Weise optimal beraten und planen, welches
                                            die beste
                                            Vorgehensweise ist.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className="accordion-button collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo">Should I buy this theme?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Ja, die Vor-ab-Besichtigung vor Ort ist in Berlin und dem Berliner Umland
                                            grundsätzlich
                                            kostenlos. Sie werden unserem Mitarbeiter individuell beraten und wir
                                            verschaffen
                                            uns
                                            einen Überblick zum Umfang der Entrümpelungsarbeiten.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree">What is Web Hosting? </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Die Dauer der Besichtigung für die Entrümpelung in Berlin hängt in erster
                                            Linie von
                                            der
                                            Größe und dem Volumen der zu entrümpelnden Fläche ab. Hinzu kommt die
                                            Zeit für die
                                            Beantwortung eventueller Fragen und die Festlegung des Ablaufes. In der
                                            Regel dauert
                                            die
                                            Besichtigung aber nicht länger als 30 Minuten.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button type="button" className="accordion-button collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour">Ist die
                                        Are there any discounts included?</button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Grundsätzlich sind die Kosten für eine professionelle Entrümpelung für
                                            Gewerbekunden
                                            steuerlich absetzbar. Aber auch private Haushalte können eine
                                            Entrümpelung als
                                            haushaltsnahe Dienstleistung beim Finanzamt geltend machen und von der
                                            Steuer
                                            absetzen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
            </div>


            {/* <!-- <div className="head-large-2">
                <span>OFFICES</span>
            </div> --> */}
        {/* <!-- </div> --> */}
    </section>
    <section className="contact-office cot-1">
        {/* <!-- <div className="container"> --> */}
            <div className="row">
                <div className="col-lg-6 my-auto ">
                    <div className="head-txt  dark-sm-head-txt p-5">
                        <div className="head">
                            <p className="first">
                                Our Business
                            </p>
                            
                        </div>
                        <div className="main-title consult-main">
                            <h2>Find the Office Closest To Your Business</h2>
                            <p>Working closely with the World Economic Forum and senior executives from 40 global companies, we have
                                developed an end-to-end approach to transform your digital enterprise.</p>
                        </div>
                        <div className="consult-address">

                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <h5 className="mb-3">New York</h5>
                                    <Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                                        execution</span></Link>
                                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                                    <span> example@gmail.com</span></Link>
                                </div>
                                <div className="col-lg-6">
                                    <h5 className="mb-3">London</h5>
                                    <Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                                        execution</span></Link>
                                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                                    <span> example@gmail.com</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 pb-0 ps-0">
                    <div className="consult-map mb-0 pb-0">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.6979175335!2d72.60029181250289!3d19.082038016316602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652837542012!5m2!1sen!2sin" width="100%" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>


            {/* <!-- <div className="head-large-2">
                <span>OFFICES</span>
            </div> --> */}
        {/* <!-- </div> --> */}
    </section>

    </>
  )
}

export default ConsultingMain