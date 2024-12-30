import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ category='', title='', id='' }) => {
  console.log({ category, title, id });
  const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : '');

  return (
    <nav aria-label="breadcrumb" style={{ paddingLeft: '20px' }}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/Products" className="text-decoration-none link-secondary">Projects</Link>
        </li>
        <li className="breadcrumb-item">
          <Link className="text-decoration-none link-secondary" to={`/ProjectList/${category}/${id}`}>
            {capitalize(category)}
          </Link>
        </li>
        <li className="breadcrumb-item active text-decoration-underline" aria-current="page">
          {capitalize(title)}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
