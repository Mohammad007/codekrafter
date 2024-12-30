import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";


const Footer = () => {
  const settings = useSelector((state) => state.SliceData.settings);
  const [sett, setSett] = useState(settings || [])

  useEffect(() => {
    if (settings) {
      setSett(settings);
    }
  },[settings]);

  return (
    <>
    {sett.length === 0 ? (<Loading />) : (
      <footer>
        <div className="top-foot">
          <div className="row">
            <div className="col-md-4 p-0 pad-meet">
              <div className="meet">
                <h5>Contact Us</h5>
              </div>

              <div className="foot-contact">
                <div className="form">
                  <div className="mbl-3">
                    <div className="pad-span">
                      <span>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Name"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mbl-3">
                    <div className="pad-span">
                      <span>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Email"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mbl-3">
                    <textarea
                      className="form-control"
                      rows="10"
                      id="validationTextarea"
                      placeholder="Type your message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-def">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-0 pad-meet">
              <div className="meet">
                <h5>Follow Us</h5>
              </div>
              <div className="social-links">
                <div className="rowing">
                  <div className="row">
                    <div className="col-md-4 col-4 mb-4">
                      <a
                        href={settings[10]?.value}
                        className="fb"
                        target="_blank"
                      >
                        <span className="foot-hov">
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span>Facebook</span>
                      </a>
                    </div>
                    <div className="col-md-4 col-4 mb-4">
                      <a
                        href={settings[12]?.value}
                        className="fb"
                        target="_blank"
                      >
                        <span className="foot-hov">
                          <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span>Twitter</span>
                      </a>
                    </div>
                    <div className="col-md-4 col-4 mb-4">
                      <a
                        href={settings[11]?.value}
                        className="fb"
                        target="_blank"
                      >
                        <span className="foot-hov">
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0  pad-meet">
              <div className="meet">
                <h5>We Work Offline Since Covid</h5>
              </div>
              <div className="business">
                <h3>Our Business</h3>
                <p>{settings[16]?.value}</p>
                <Link to="" className="quick contact-add-icon">
                  <span>{settings[15]?.value}</span>
                </Link>
                <Link to="" className="quick contact-phone-icon">
                  <span>{settings[13]?.value}</span>
                </Link>
                <Link to="" className="quick contact-mail-icon">
                  <span>{settings[14]?.value}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
    </>
  );
};

export default Footer;
