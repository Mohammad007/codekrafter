import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./projectview.css"; // Ensure this matches your actual file name and location

const Breadcrumbs = ({ category = '', title = '', id = '' }) => {
  const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : '');

  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/Products">Projects</Link>
      </li>
      <li className="breadcrumb-item">
        <span></span>
        <Link to={`/ProjectList/${category}/${id}`}>
          {capitalize(category)}
        </Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        <span></span>
        <span>{capitalize(title)}</span>
      </li>
    </ol>
  );
};

const BackButtonWithBreadcrumbs = ({ category = '', title = '', id = '' }) => {
  const navigate = useNavigate();

  return (
    <div className="back-button-container">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      <div className="breadcrumb-container">
        <Breadcrumbs category={category} title={title} id={id} />
      </div>
    </div>
  );
};

const ProjectView = ({ category, title, id }) => {
  return (
    <div>
      {/* Other project view content */}
      <BackButtonWithBreadcrumbs category={category} title={title} id={id} />
      {/* Other project view content */}
    </div>
  );
};

export default ProjectView;

