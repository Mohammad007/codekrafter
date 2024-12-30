import React from 'react';

const ExpandableList = ({
  heading,
  items,
  activeLink,
  handleLinkClick,
  isExpanded,
  handleClick,
}) => {
  const handleItemClick = (index) => {
    handleLinkClick(index);
  };

  return (
    <div>
      <h4 onClick={handleClick}>
        {heading} {isExpanded ? '▼' : '►'}
      </h4>
      {isExpanded && (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={activeLink === index ? 'active' : ''}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableList;
