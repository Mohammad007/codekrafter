import React, { useEffect, useRef, useState } from "react";
import ProjectImage1 from "../component/img/5.jpeg";
import ProjectImage2 from "../component/img/5.jpeg";
import ProjectImage3 from "../component/img/5.jpeg";
import Andriod from "../component/img/icon/android.png";
import IOS from "../component/img/icon/app-store (1).png";
import ProjectImage5 from "../component/img/5.jpeg";
import MegaMenu from "../main-components/MegaMenu";
import { BaseUrl, ImageURL } from "../BaseUrl";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import OwlCarousel from "react-owl-carousel";
import ReactMarkdown from "react-markdown";
import { Carousel } from "react-bootstrap";
import Footer from "../main-components/Footer";
// import Breadcrumbs from "../component/Breadcrumb";
import BackButtonWithBreadcrumbs from "../component/BackButtonWithBreadcrumbs";

const decodeSlug = (slug) => {
  return slug.replace(/-/g, " "); // Replace hyphens back to spaces
};

function ProjectView() {
  let { state } = useLocation();
  const navigate = useNavigate();
  const { category, title } = useParams();
  console.log("Project Name: ", title);
  const decodedTitle = decodeSlug(title);
  const [showModel, setShowModel] = useState(false);
  const [button, setButton] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectProduct, setProjectProduct] = useState(null);
  const { pathname } = useLocation();
  const [logo, setLogo] = useState("logo-Light.png"); // Default logo

  const categories = [
    { id: 1, name: "E-commerce Websites", url: "e-commerce-websites" },
    { id: 2, name: "Websites", url: "websites" },
    { id: 3, name: "Mobile Apps", url: "mobileapps" },
    { id: 4, name: "Games", url: "games" },
    { id: 5, name: "ERP & CRMs", url: "erp&crms" },
    { id: 6, name: "LMS", url: "lms" },
    { id: 7, name: "OptionChain", url: "optionchain" },
  ];

  const categoryObj = categories.find((cat) => cat.url === category);

  useEffect(() => {
    handleCheckMobileView();
    // Updated to handle routes like '/ProjectView/3'
    if (pathname.startsWith("/ProjectView")) {
      setLogo("logo-Dark.png");
    } else {
      setLogo("logo-Light.png");
    }
  }, [pathname]);

  const handleCheckMobileView = (value) => {
    if (window.screen.availWidth <= 767) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }

    if (value !== undefined) {
      setShowModel(!showModel);
    }
  };

  useEffect(() => {
    ProjectDetails();
  }, [title]);

  const ProjectDetails = async () => {
    try {
      const projectDetailsResp = await fetch(
        `${BaseUrl}/getProjectDetailsApi/${state?.id}`
      );
      const projectRespJson = await projectDetailsResp.json();
      setProjectProduct(projectRespJson.projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
    <style>
      {`
        .bread {
          position: sticky;
          top: 0;
        }
      `}
    </style>
      <MegaMenu logo={logo} /> {/* Passing logo prop */}
      <br />
      <div className="pos-rel pos-rel-page">
        {/* Back Button */}
        {/* <div className="back-button-container" style={{ marginLeft: "18px" }}>
          <span><button
            className="back-button btn btn-light"
            onClick={() => navigate(-1)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </span>
          </button></span> */}
          {/* Add Breadcrumbs below Back Button */}
          {/* <span>
          <Breadcrumbs
            category={categoryObj?.url}
            title={decodedTitle}
            id={categoryObj?.id}
          /></span>
        </div> */}
        <br />
        <div className="bread">
        <BackButtonWithBreadcrumbs
            category={categoryObj?.url}
            title={decodedTitle}
            id={categoryObj?.id}
        />
        </div>
        <section className="first_detail">
          <div className="text-center"></div>
          <Carousel>
            {projectProduct?.image_slider &&
              JSON.parse(projectProduct?.image_slider).map((item, index) => (
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-80"
                    src={`${ImageURL}/${item}`}
                    alt={item}
                    key={index}
                  />
                </Carousel.Item>
              ))}
          </Carousel>

          <div className="block d-flex justify-content-evenly align-items-start containers px-md-5 px-1">
            <div className="details_text">
              <ReactMarkdown>{projectProduct?.content || ""}</ReactMarkdown>
            </div>
            <div className="d-xl-block d-none d-flex justify-content-center align-items-center">
              {/* <button
                className="text-gray btn border-0 bg-transparent p-0 m-0"
                onClick={() => setButton(!button)}
              >
                PROJECT TECHNOLOGY{" "}
                <span className="icon">
                  <svg
                    height="13"
                    viewBox="0 0 13 13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#999"
                      strokeLinecap="square"
                      transform="translate(1.04 1.04)"
                    >
                      <path d="m5.46 0v10.92"></path>
                      <path
                        d="m5.46 0v10.92"
                        transform="matrix(0 -1 1 0 0 10.92)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button> */}
            </div>
          </div>

          <Carousel>
            {projectProduct?.image_slider_two &&
              JSON.parse(projectProduct?.image_slider_two).map(
                (item, index) => (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-80"
                      src={`${ImageURL}/${item}`}
                      alt={item}
                      key={index}
                    />
                  </Carousel.Item>
                )
              )}
          </Carousel>
          <div className="details_text d-flex justify-content-center align-items-start block containers">
            <div className="details_text">
              <ReactMarkdown>{projectProduct?.content_two || ""}</ReactMarkdown>
            </div>
          </div>

          {/* <div className="block px-5 containers">
            <hr />
          </div> */}
          <Carousel>
            {projectProduct?.image_slider_three &&
              JSON.parse(projectProduct?.image_slider_three).map(
                (item, index) => (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-80"
                      src={`${ImageURL}/${item}`}
                      alt={item}
                      key={index}
                    />
                  </Carousel.Item>
                )
              )}
          </Carousel>
          <div className="details_text d-flex justify-content-center align-items-start block containers">
            <div className="details_text">
              <ReactMarkdown>
                {projectProduct?.content_three || ""}
              </ReactMarkdown>
            </div>
          </div>
          {/* <div className="block px-5 containers">
            <hr />
          </div> */}
          <Carousel>
            {projectProduct?.image_slider_four &&
              JSON.parse(projectProduct?.image_slider_four).map(
                (item, index) => (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-80"
                      src={`${ImageURL}/${item}`}
                      alt={item}
                      key={index}
                    />
                  </Carousel.Item>
                )
              )}
          </Carousel>
          <div className="details_text d-flex justify-content-center align-items-start block containers">
            <div className="details_text">
              <ReactMarkdown>
                {projectProduct?.content_four || ""}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <div className="downlaod-btn-cont">
          {projectProduct?.android_check == 1 && (
            <button
              onClick={() => {
                window.open(projectProduct?.android_link, "_blank");
              }}
            >
              <img src={Andriod} />
              <div>
                <span>Download</span>
                <span className="sub-span">Android</span>
              </div>
            </button>
          )}

          {projectProduct?.ios_check == 1 && (
            <button
              onClick={() => {
                window.open(projectProduct?.ios_link, "_blank");
              }}
            >
              <img src={IOS} />
              <div>
                <span>Download</span>
                <span className="sub-span">IOS</span>
              </div>
            </button>
          )}

          {projectProduct?.website_check == 1 && (
            <button
              onClick={() => {
                window.open(projectProduct?.website_link, "_blank");
              }}
            >
              <img />
              <div>
                <span>Visit</span>
                <span className="sub-span">Website</span>
              </div>
            </button>
          )}
        </div>
      </div>
      {/* Project Technology button */}
      {/* {button === true && (
        <div className="popup">
          <div className="popup-inner">
            <button
              className="close-btn nav-btn"
              onClick={() => setButton(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="form-section">
              <div className="contact-area">
                <div className="contact-form">
                  <div className="col-lg-12 pt-5 pb-4">
                    <div className="px-4">
                      <div className="mt-5">
                        <hr style={{ width: "100%" }} />
                      </div>
                      <div className="d-flex block">
                        <div>
                          <p className="text-gray w-75">CERTIFICATION</p>
                          <p className="text-gray w-75 fw-bold">
                            LEED-NC Platinum
                          </p>
                          <p className="text-gray w-75">SIZE</p>
                          <p className="text-gray w-75 fw-bold">
                            350,000 sq.-ft. / 32,515 sq. m.
                          </p>
                          <p className="text-gray w-75">AWARDS</p>
                          <p className="text-gray w-75 fw-bold">
                            USGBC Leadership Award – Mid-Atlantic & Northeast
                            Region
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            IIDA PA/NJ/DE Chapter – Best of Corporate Honorable
                            Mention Award
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            ASLA Potomac Chapter – Honor Award
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            ASLA Maryland Chapter – Honor Award
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            AIA Philadelphia – General Built
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            AIA Pennsylvania – Architectural Excellence COTE
                            Award
                          </p>
                          <p className="text-gray w-75 fw-bold">
                            AIA New Jersey – Built Sustainability
                          </p>
                        </div>
                        <div>
                          <p className="text-gray">SERVICES</p>
                          <p className="text-gray fw-bold">Architecture</p>
                          <p className="text-gray fw-bold">Engineering</p>
                          <p className="text-gray fw-bold">
                            Health + Well-Being
                          </p>
                          <p className="text-gray fw-bold">Interiors</p>
                          <p className="text-gray">Landscape Architecture</p>
                          <p className="text-gray fw-bold">Lighting Design</p>
                          <p className="text-gray fw-bold">
                            Planning + Urban Design
                          </p>
                          <p className="text-gray fw-bold">
                            Regenerative Design
                          </p>
                          <p className="text-gray fw-bold">
                            Sustainable Design
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Footer />
    </>
  );
}

export default ProjectView;
