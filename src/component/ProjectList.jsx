// import React, { useEffect, useState } from "react";
// import MegaMenu from "../main-components/MegaMenu.jsx";
// import Footer from "../main-components/Footer.js";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import ProductImage from "../Data/about-banner.jpg";
// import { BaseUrl } from "../BaseUrl/index.js";
// import Loading from "./Loading.jsx";

// const ProjectList = () => {
//   let { state } = useLocation();
//   const [projectlist, setProjectList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [projectProduct, setProjectProduct] = useState([]);

//   useEffect(() => {
//     projectMenu()
//     projectList();
//   }, [state?.id]); // <-- Updated: added [state?.id] as dependency

  
//   const projectMenu = async () => {
//     try {
      
//       const projectResp = await fetch(`${BaseUrl}/getProjectApi`);
//       const projectRespJson = await projectResp.json();
//       setProjectList(projectRespJson.projects)
//       setIsLoading(false)
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false)
//     }
//   }
  
//   const projectList = async () => {
//     try {
//       const projectResp = await fetch(
//         `${BaseUrl}/getProjectListByIdApi/${state?.id}`
//       );
//       const projectRespJson = await projectResp.json();
//       setProjectProduct(projectRespJson.projects);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };


//   return isLoading ? (
//     <Loading />
//   ) : (
//     <>
//      <style>
//         {`
//           .filter-btn {
//             position: relative;
//           }
          
//           .active-line {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             height: 2px;
//             background-color: #000;
//             transform: scaleX(0); /* Initially scale down to hide */
//             transform-origin: bottom left;
//             transition: transform 0.3s ease;
//           }
          
//           .filter-btn.active .active-line {
//             transform: scaleX(1); /* Scale up to show */
//           }
//         `}
//       </style>
//       <MegaMenu />
//       <div className="w-100 project-container">
//       <div className="products-tabs">
//           <div className="products-tab mb-4 d-flex justify-content-between">
//             {projectlist.length > 0 &&
//               projectlist?.map((item, index) => (
//                 <Link
//                 className={`filter-btn ${state?.id === item.id ? 'active' : ''}`} // Conditionally apply 'active' class
//                   style={{
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     marginRight: "10px",
//                   }}
//                   to={`/ProjectList/${item?.url}/${item?.id}`}
//                   key={index}
//                   state={{ name: item?.name, id:item?.id }}
//                 >
//                   {item?.name}
//                   {state?.id === item.id && <div className="active-line" />}
//                 </Link>
//               ))}
//           </div>
//         </div>
//         <div className="contact-heading max-600 mx-auto text-center px-4">
//           <h1>{state?.name}</h1>
//         </div>
//         <div className="container-fluid">
//           <div className="row">
//             <hr style={{ fontSize: "2px" }} />
//             {projectProduct.length > 0 ? (
//               projectProduct?.map((item, index) => (
//                 <div className="col-md-3 mb-3" key={index}>
//                   <Link
//                     to={`/ProjectView/${item.id}`}
//                     style={{ textDecoration: "none", color: "black" }}
//                   >
//                     <div className="card">
//                       <img
//                         className="card-img-top"
//                         src={ProductImage}
//                         alt={item?.title}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{item?.title}</h5>
//                         <p className="card-text">
//                           {item?.short_content.slice(0, 100)}..
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))
//             ) : (
//               <div className="col-md-12 text-center">
//                 <div className="jumbotron">
//                   <h1 className="display-4">404</h1>
//                   <p className="lead" style={{ fontSize:'40px' }}>
//                     There is no data...
//                   </p>
//                 </div>
//               </div>
//             )}
//             <hr />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProjectList;


import React, { useEffect, useState } from "react";
import MegaMenu from "../main-components/MegaMenu.jsx";
import Footer from "../main-components/Footer.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductImage from "../Data/about-banner.jpg";
import { BaseUrl } from "../BaseUrl/index.js";
import Loading from "./Loading.jsx";

const ProjectList = () => {
  let { state } = useLocation();
  const [projectlist, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectProduct, setProjectProduct] = useState([]);
  const [activeItem, setActiveItem] = useState(state?.id || null); // Added: Initialize with state id or null
  const { pathname } = useLocation(); // Get current pathname
  const [logo, setLogo] = useState('logo-Light.png'); // Default logo

  const getCategoryUrl = (projectId, categories) => {
    const category = categories.find(category => category.id === projectId);
    return category ? category.url : 'default-category';
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

  useEffect(() => {
    projectMenu();
    projectListByItem(state?.id || null); // Fetch projects based on state id or fetch all if null

    // Update logo based on route
    if (pathname.startsWith('/Products')) {
      setLogo('logo-Dark.png');
    } else {
      setLogo('logo-Light.png');
    }
  }, [state?.id],[pathname]); // <-- Updated: added [state?.id] as dependency

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

  // const projectList = async () => {
  //   try {
  //     const projectResp = await fetch(
  //       `${BaseUrl}/getProjectListByIdApi/${state?.id}`
  //     );
  //     const projectRespJson = await projectResp.json();
  //     setProjectProduct(projectRespJson.projects);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  const projectListByItem = async (id) => { // Fetch projects based on selected tab
    try {
      const endpoint = id ? `${BaseUrl}/getProjectListByIdApi/${id}` : `${BaseUrl}/getProjectListApi`;
      const projectResp = await fetch(endpoint);
      const projectRespJson = await projectResp.json();
      setProjectProduct(projectRespJson.projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  

  const scrollLeft = () => {
    document.querySelector('.products-tab').scrollBy({ left: -200, behavior: 'smooth' });
  };

  // const scrollLeft = () => {
  //   const productsTab = document.querySelector('.products-tab');
  //   if (productsTab) {
  //     productsTab.scrollBy({ left: -200, behavior: 'smooth' });
  //   }
  // };

  const scrollRight = () => {
    document.querySelector('.products-tab').scrollBy({ left: 200, behavior: 'smooth' });
  };

  // const scrollRight = () => {
  //   const productsTab = document.querySelector('.products-tab');
  //   if (productsTab) {
  //     productsTab.scrollBy({ left: 200, behavior: 'smooth' });
  //   }
  // };

  const handleMenuClick = (item) => { // Added: Handle "All" option and other tabs
    setActiveItem(item ? item.id : null);
    projectListByItem(item ? item.id : null);
  };

  // const projectListByItem = async (id) => { // Added: Fetch projects based on selected tab
  //   try {
  //     const projectResp = await fetch(
  //       `${BaseUrl}/getProjectListByIdApi/${id || ''}`
  //     );
  //     const projectRespJson = await projectResp.json();
  //     setProjectProduct(projectRespJson.projects);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

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

          .products-tab-container {
            position: relative;
            display: flex;
            align-items: center;
          }
      
          .products-tab {
            display: flex;
            justify-content: space-between;
            overflow-x: auto;
            scroll-behavior: smooth;
            width: 100%; /* Ensure full width on larger screens */
          }
      
          .scroll-arrow {
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            z-index: 1;
          }
      
          .scroll-arrow.left {
            left: 0;
          }
      
          .scroll-arrow.right {
            right: 0;
          }
      
          @media (max-width: 768px) {
            .scroll-arrow {
              display: block;
            }
          }
        `}
      </style>
      <MegaMenu logo={logo}/>
      <div className="w-100 project-container">
        <div className="products-tabs">
          <div className="products-tab-container">
            <button className="scroll-arrow left" onClick={scrollLeft}>
              &lt;
            </button>
            <div className="products-tab mb-4 d-flex justify-content-between">

              <Link
                className={`filter-btn ${activeItem === null ? "active" : ""}`} // Added: "All" option
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
                to="/Products"
                onClick={() => handleMenuClick(null)} // Added: Handle click for "All" option
              >
                All
                {activeItem === null && <div className="active-line" />} {/* Added: Active line */}
              </Link>

              {projectlist.length > 0 &&
                projectlist?.map((item, index) => (
                  <Link
                    className={`filter-btn ${state?.id === item.id ? 'active' : ''}`} // Conditionally apply 'active' class
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                    to={`/ProjectList/${item?.url}/${item?.id}`}
                    key={index}
                    state={{ name: item?.name, id: item?.id }}
                    onClick={() => handleMenuClick(item)} // Modified: Call handleMenuClick
                  >
                    {item?.name}
                    {activeItem === item.id && <div className="active-line" />} 
                    {/* state?.id */}
                  </Link>
                ))}
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>
              &gt;
            </button>
          </div>
        </div>
        <div className="contact-heading max-600 mx-auto text-center px-4">
          <h1>{state?.name}</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <hr style={{ fontSize: "2px" }} />
            {projectProduct.length > 0 ? (
              projectProduct?.map((item, index) => {
                const categoryUrl = getCategoryUrl(item.project_id, categories);
                const projectSlug = createSlug(item.title);
                return (
                <div className="col-md-3 mb-3" key={index}>
                  <Link
                    to={`/ProjectView/${categoryUrl}/${projectSlug}`}
                    state={{ id: item.id }}
                    key={index}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`https://codekrafters.in/admin/storage/app/public/${item?.image}` ||  ProductImage}
                        alt={item?.title}
                        style={{
                          width: '100%',    // Set to 100% to match the card width
                          height: '200px',  // Fixed height for all images
                          objectFit: 'cover' // Ensures the image covers the area without distortion
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
              })
            ) : (
              <div className="col-md-12 text-center">
                <div className="jumbotron">
                  <h1 className="display-4">404</h1>
                  <p className="lead" style={{ fontSize: "40px" }}>
                    There is no data...
                  </p>
                </div>
              </div>
            )}
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectList;



