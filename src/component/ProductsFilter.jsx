import React, { useState } from "react";
import MegaMenu from "../main-components/MegaMenu.jsx";
import Footer from "../main-components/Footer.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductImage from "../Data/about-banner.jpg";
import { useEffect } from "react";
import { BaseUrl } from "../BaseUrl/index.js";
import Loading from "./Loading.jsx";

const ProductsFilter = () => {
  const [projectlist, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectProduct, setProjectProduct] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const { pathname } = useLocation(); // Get current pathname
  const [logo, setLogo] = useState("logo-Light.png"); // Default logo

  useEffect(() => {
    projectMenu();
    projectList();
    // Update logo based on route
    if (pathname.startsWith("/Products")) {
      setLogo("logo-Dark.png");
    } else {
      setLogo("logo-Light.png");
    }
  }, [pathname]);

  const projectMenu = async () => {
    try {
      const projectResp = await fetch(`${BaseUrl}/getProjectApi`);
      const projectRespJson = await projectResp.json();
      setProjectList(projectRespJson.projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const projectList = async () => {
    try {
      const projectResp = await fetch(`${BaseUrl}/getProjectListApi`);
      const projectRespJson = await projectResp.json();
      setProjectProduct(projectRespJson.projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleMenuClick = (item) => {
    setActiveItem(item ? item.id : null); // Set the active item when menu item is clicked
  };

  const getCategoryUrl = (projectId, categories) => {
    const category = categories.find((category) => category.id === projectId);
    return category ? category.url : "default-category";
  };

  const createSlug = (title) => {
    return title.toLowerCase().replace(/ /g, "-"); // Replace spaces with hyphens
  };

  const categories = [
    { id: 1, name: "E-commerce Websites", url: "e-commerce-websites" },
    { id: 2, name: "Websites", url: "websites" },
    { id: 3, name: "Mobile Apps", url: "mobileapps" },
    { id: 4, name: "Games", url: "games" },
    { id: 5, name: "ERP & CRMs", url: "erp&crms" },
    { id: 6, name: "LMS", url: "lms" },
    { id: 7, name: "OptionChain", url: "optionchain" },
  ];

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <style>
        {`
          .filter-btn {
            position: relative;
          }
          
          .active-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #000;
            transform: scaleX(0); /* Initially scale down to hide */
            transform-origin: bottom left;
            transition: transform 0.3s ease;
          }
          
          .filter-btn.active .active-line {
            transform: scaleX(1); /* Scale up to show */
          }
        `}
      </style>
      <MegaMenu logo={logo} /> {/* Pass the logo prop */}
      <div className="w-100 project-container">
        <div className="contact-heading max-600 mx-auto text-center px-4">
          <h1>Our Projects</h1>
          <p>
            We are a uniquely diverse range of consultants delivering extremely
            high profile projects across the world, working to meet some of the
            world's greatest challenges.
          </p>
        </div>
        <div className="products-tabs">
          <div className="products-tab mb-4 d-flex justify-content-between">
            <Link
              className={`filter-btn ${activeItem === null ? "active" : ""}`} // Added line: "All" option
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                marginRight: "10px",
              }}
              to="/Products"
              onClick={() => handleMenuClick(null)} // Added line: Handle click for "All" option
            >
              All
              {activeItem === null && <div className="active-line" />}  
              {/* {" "} */}
              {/* Added line: Added active line */}
            </Link>

            {projectlist.length > 0 &&
              projectlist?.map((item, index) => (
                <Link
                  className={`filter-btn ${
                    activeItem === item.id ? "active" : ""
                  }`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                  to={`/ProjectList/${item?.url}/${item?.id}`}
                  key={index}
                  state={{ name: item?.name, id: item?.id }}
                  onClick={() => handleMenuClick(item)} // Call handleMenuClick on click
                >
                  {item?.name}
                  {activeItem === item.id && (
                    <div className="active-line" />
                  )}
                  {/* {" "} */}
                  {/* Added active line */}
                </Link>
              ))}
          </div>
        </div>

        {projectlist.length > 0 &&
          projectlist?.map((item, index) => (
            <div className="container-fluid" key={index}>
              <div className="row mb-2">
                <div className="col-md-6">
                  <h3 style={{ color: "rgba(29, 29, 29, 0.6)" }}>
                    {item?.name}
                  </h3>
                </div>
                <div className="col-md-6" style={{ textAlign: "right" }}>
                  <Link
                    to={`/ProjectList/${item?.url}/${item?.id}`}
                    style={{
                      textDecoration: "none",
                      background: "#eceaea",
                      color: "black",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "14px",
                      width: "120px",
                      lineHeight: "40px",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    state={{ name: item?.name, id: item?.id }}
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="row">
                {projectProduct.length > 0 &&
                  projectProduct
                    .filter(
                      (itemProduct) =>
                        activeItem === null ||
                        itemProduct.project_id === item.id
                    ) // Modified line: Filter based on activeItem
                    .filter((itemProduct) => itemProduct.project_id === item.id)
                    .map((item, index) => {
                      const categoryUrl = getCategoryUrl(
                        item.project_id,
                        categories
                      );
                      const projectSlug = createSlug(item.title);
                      return (
                        <div className="col-md-3 mb-3" key={index}>
                          <Link
                            to={`/ProjectView/${categoryUrl || "default-category"}/${
                              projectSlug || "default-title"
                            }`}
                            state={{ id: item?.id }}
                            key={index}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card">
                              {/* <img
                            className="card-img-top"
                            src={ProductImage}
                            alt={item?.title}
                          /> */}
                              <img
                                className="card-img-top"
                                src={
                                  item?.image
                                  ?`https://codekrafters.in/admin/storage/app/public/${item?.image}`:ProductImage
                                }
                                alt={item?.title}
                                style={{
                                  width: "100%", // Set to 100% to match the card width
                                  height: "200px", // Fixed height for all images
                                  objectFit: "cover", // Ensures the image covers the area without distortion
                                }}
                              />
                              <div className="card-body">
                                <h5 className="card-title">{item?.title}</h5>
                                <p className="card-text">
                                  {item?.short_content.slice(0, 100)}..
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                <hr />
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductsFilter;
