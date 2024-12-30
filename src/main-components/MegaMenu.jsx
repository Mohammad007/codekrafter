import { React, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import icon2 from "../component/img/icon/2.svg";
import icon3 from "../component/img/icon/3.svg";
import icon4 from "../component/img/icon/4.svg";
import icon5 from "../component/img/icon/5.svg";
import icon11 from "../component/img/icon/11.svg";
import icon12 from "../component/img/icon/12.svg";
import logoFinal from "./Images/logo-Final.png";
import logoLight from "./Images/logo-Light.png";
import logoDark from "./Images/logo-Dark.png";

import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

const MegaMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [logo, setLogo] = useState("logo-Light.png"); // Default logo
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const location = useLocation();
  // Determine which logo to display based on the current route
  const isDarkLogo =
    location.pathname.startsWith("/ProjectView") ||
    location.pathname.startsWith("/Products") ||
    location.pathname.startsWith("/ProjectList");

  const [columnSizes, setColumnSizes] = useState({ md: 4, lg: 3 }); // 🔨 Add state for responsive column sizes

  useEffect(() => {
    if (
      location.pathname === "/ProjectView" ||
      location.pathname === "/Products" ||
      location.pathname.startsWith("/ProjectList")
    ) {
      setLogo(logoDark);
    } else {
      setLogo(logoFinal);
    }
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        // Screen width is 767px or less
        setColumnSizes({ md: 4, lg: 3 }); // 🔨 Update column sizes when screen width is <= 767px
      } else if (window.innerWidth <= 991) {
        // Screen width is between 768px and 991px
        setColumnSizes({ md: 4, lg: 3 });
      } else {
        // Screen width is more than 991px
        setColumnSizes({ md: 8, lg: 4 }); // Reset to default sizes or desired sizes for larger screens
      }
    };

    handleMediaQueryChange(mediaQuery); // Check the current screen size
    mediaQuery.addListener(handleMediaQueryChange); // Listen for changes

    return () => mediaQuery.removeListener(handleMediaQueryChange); // Clean up the listener
  }, []); // Empty dependency array to run once on mount

  const ResponsiveButton = () => (
    <a
      href="#"
      style={{ padding: "2px 20px", margin: "0 1.5rem 0 0", height: "2rem" }}
      className={`wobble-hor-bottom e-com-down contact-btn responsive-button${
        isClicked ? " clicked" : ""
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </a>
  );

  return (
    <>
      <header
        className={`header responsive-header${isClicked ? " clicked" : ""}`}
      >
        <style>
          {`
            .megls {
              background-color:#f6f8f9;
              // padding: 15px;
            }

            @media screen and (max-width: 990px){
              .erps {
                margin-left: 50px;
              }
            }

            @media screen and (max-width: 767px){

              .megls {
                background: white;
                // margin-left: 1.2rem;
                // border-radius: 5px;
              }

              .erps{
                margin-left: 6%;
                padding-left: 0;
              }

              .busint {
                margin-left: 1.2rem;
                padding-left: 0;
              }

              .adwrd {
                margin-left: 1.2rem;
                padding-left: 0;
              }
            }

            a.dropdown-toggle.nav-link::after {
              transition: none !important;
              transform: rotate(0deg) !important;
              content: '\\f0d7'; /* FontAwesome down arrow character */
              font-family: 'FontAwesome';
              font-size: inherit; /* Inherit the font size from the parent */
              display: inline-block;
              background: none !important; /* Remove any background */
              border: none !important; /* Remove any border */
              margin: 0; /* Remove any margin */
              padding: 0; /* Remove any padding */
              line-height: 1; /* Adjust line height */
              vertical-align: middle; /* Ensure it's vertically centered */
              color: inherit;
            }
          `}
        </style>
        <MDBNavbar expand="lg">
          <MDBContainer fluid>
            <MDBNavbarNav
              className="me-auto ps-lg-0"
              style={{ paddingLeft: "0.15rem" }}
            >
              <div className="hed mart d-flex align-items-center me-auto responsive-logo ">
                <Link className="navbar-brand" to="/">
                  <img
                    className="show-1"
                    src={logoFinal}
                    width="120px"
                    alt="Logo"
                  />
                  <img
                    className="show-2"
                    src={isDarkLogo ? logoDark : logoLight}
                    width="120px"
                    alt=""
                  />
                </Link>
                <ResponsiveButton />
              </div>

              {/* IT Services */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    // onClick={toggleDropdown}
                    style={{ color: "black" }}         //#B47759
                  >
                    {/* <i>
                      <img src={icon3} />
                    </i> */}
                    <Link
                      to="/application-development"
                      style={{ color: "black" }}
                    >
                      IT Services
                    </Link>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    className="mt-0 w-100 justify-content-center"
                    style={{
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  >
                    <MDBContainer>
                      <MDBRow className="">
                        {/* Col 1 - Mobile Applications */}
                        <MDBCol md="4" lg="3" className="mb-3 mb-lg-0 ms-5">
                          <MDBListGroup flush>
                            <MDBListGroupItem
                              className="text-uppercase font-weight-bold fw-bold"
                              tag="a"
                              action
                            >
                              <Link
                                to="/application-development"
                                style={{ color: "black" }}
                                className="text-uppercase fw-bold"
                              >
                                Mobile Application
                              </Link>
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/android-apps"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#aac148"
                                class="bi bi-android2"
                                viewBox="0 0 16 16"
                              >
                                <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
                              </svg>
                              &nbsp; Android Apps
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/ios-apps"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-apple"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                              </svg>
                              &nbsp; IOS Apps
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/hybrid-apps"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#1dcf60"
                                class="bi bi-filter-circle-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                              </svg>
                              &nbsp; Hybrid Apps
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/progressive-apps"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right-square-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                              </svg>
                              &nbsp; Progressive Apps
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>

                        {/* Col 2 - Website */}
                        <MDBCol md="4" lg="3" className="mb-3 mb-lg-0 ms-5">
                          <MDBListGroup flush>
                            <MDBListGroupItem
                              className="text-uppercase font-weight-bold fw-bold"
                              tag="a"
                              action
                            >
                              <Link
                                to="/website-development"
                                style={{ color: "black" }}
                                className="text-uppercase fw-bold"
                              >
                                Website
                              </Link>
                            </MDBListGroupItem>

                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/corporate-website"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-buildings-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                              </svg>
                              &nbsp; Corporate Website
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/ecommerce-website"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-cart4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                              </svg>
                              &nbsp; E-commerce Website
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/service-website"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-gear-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                              </svg>
                              &nbsp; Service Website
                            </MDBListGroupItem>

                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="/portal-development"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-globe-americas"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                              </svg>
                              &nbsp; Portal Development
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>

                        {/* Col 3 - ERP */}
                        <MDBCol
                          md={columnSizes.md}
                          lg={columnSizes.lg}
                          className="mb-3 mb-md-0 erps"
                        >
                          <div className="megls">
                            <MDBListGroup flush className="megls">
                              <MDBListGroupItem
                                className="text-uppercase font-weight-bold fw-bold megls"
                                tag="a"
                                action
                              >
                                ERP
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-cpu-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                                  <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5" />
                                </svg>
                                &nbsp; Dharma ERP
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-menu-up"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793zM1 9V6h14v3zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5" />
                                </svg>
                                &nbsp; CRM
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-diagram-3-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z"
                                  />
                                </svg>
                                &nbsp; Sub Contracting
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-card-checklist"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg>
                                &nbsp; Sales
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-bar-chart-line-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                                </svg>
                                &nbsp; Finance
                              </MDBListGroupItem>

                              <br />
                            </MDBListGroup>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* Data Science */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    {/* <i>
                      <img src={icon11} />
                    </i> */}
                    <Link
                      to="/application-development"
                      style={{ color: "black" }}
                    >
                      Data Science
                    </Link>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    className="mt-0 w-100 justify-content-center dtsci-drpdwn"
                    style={{
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  >
                    <MDBContainer>
                      <MDBRow className="">
                        {/* Col 1 */}
                        <MDBCol md="4" lg="4" className="mb-3 mb-lg-0 ps-3">
                          <MDBListGroup flush>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-minecart-loaded"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638q-.136.194-.308.362H3c.13-.147.401-.432.562-.545a1.6 1.6 0 0 0 .393-.393A2.5 2.5 0 0 1 6 1"
                                />
                              </svg>
                              &nbsp; Data Mining
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-stars"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                              </svg>
                              &nbsp; Machine Learning
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-database-add"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
                                <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
                              </svg>
                              &nbsp; Big Data
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-activity"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
                                />
                              </svg>
                              &nbsp; Data Analysis
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>

                        {/* Col-2 */}
                        <MDBCol md="4" lg="4" className="mb-3 mb-lg-0 ps-3">
                          <MDBListGroup flush>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-translate"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                              </svg>
                              &nbsp; Natural Language Processing
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-cloud-check-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                              </svg>
                              &nbsp; Cloud Computing
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-file-earmark-ppt-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z" />
                              </svg>
                              &nbsp; Data Visualization
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-binoculars-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z" />
                              </svg>
                              &nbsp; Data Exploration
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>

                        {/* Col 3 */}
                        <MDBCol
                          md={columnSizes.md}
                          lg={columnSizes.lg}
                          className="mb-3 mb-md-0 megls busint"
                        >
                          <MDBListGroup flush className="megls ds">
                            <MDBListGroupItem
                              className="megls fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-briefcase-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                              </svg>
                              &nbsp; Business Analysis
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="megls fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x-diamond-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z" />
                              </svg>
                              &nbsp; Business Intelligence
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="megls fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trello"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.9 1.9 0 0 0 1.902 16h12.199A1.9 1.9 0 0 0 16 14.09V1.9A1.9 1.9 0 0 0 14.1 0M7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633z" />
                              </svg>
                              &nbsp; Power BI Dashboard
                            </MDBListGroupItem>

                            <MDBListGroupItem
                              className="megls fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bar-chart-line-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                              </svg>
                              &nbsp; Statistics
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* Digital Marketing */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    {/* <i>
                      <img src={icon12} />
                    </i> */}
                    <Link
                      to="/application-development"
                      style={{ color: "black" }}
                    >
                      Digital Marketing
                    </Link>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    className="mt-0 w-100 justify-content-center digi-drpdwn"
                    style={{
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  >
                    <MDBContainer>
                      <MDBRow className="">
                        {/* Col 1 - Mobile Applications */}
                        <MDBCol md="4" lg="6" className="mb-3 mb-lg-0 ps-3">
                          <MDBListGroup flush>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-search"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                              </svg>
                              &nbsp; On-SEO
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-search-heart-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                              </svg>
                              &nbsp; Off-SEO
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-alt"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5m10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5" />
                              </svg>
                              &nbsp; SMM
                            </MDBListGroupItem>
                            <MDBListGroupItem
                              className="fs-6"
                              tag="a"
                              href="#"
                              action
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-archive-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                              </svg>
                              &nbsp; PPC
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCol>

                        {/* Col 2 */}
                        <MDBCol
                          md="8"
                          lg="6"
                          className="mb-3 mb-md-0 megls adwrd"
                        >
                          <div className="megls">
                            <MDBListGroup flush className="megls">
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-badge-ad"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11zm1.503-4.852.734 2.426H4.416l.734-2.426zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                </svg>
                                &nbsp; Adword
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-ticket-perforated-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z" />
                                </svg>
                                &nbsp; Performance Marketing
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                className="megls fs-6"
                                tag="a"
                                href="#"
                                action
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-markdown"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5"
                                  />
                                  <path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11z" />
                                </svg>
                                &nbsp; Content Marketing
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* About Us */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <Link
                    to="/about"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    About Us
                  </Link>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* Careers */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <Link to="/career" className="nav-link" style={{ color: "black" }}>
                    Careers
                  </Link>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* Projects */}
              <MDBNavbarItem className="position-static">
                <MDBDropdown>
                  <Link
                    to="/Products"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Projects
                  </Link>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
};

export default MegaMenu;
