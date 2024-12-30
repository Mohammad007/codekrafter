import React, { useState } from 'react';
import photo from './photo.jpg';
import { goToSlide } from '../WebDetails'; // Import the goToSlide function
import { Dropdown } from 'bootstrap';

const DropdownMenu = ({ heading, items, activeLink, handleLinkClick, isExpanded, handleClick , data }) => {
  return (
    <ul style={{ position: 'relative', alignSelf: 'flex-start' }}>
      <h4 className="rectangle" onClick={handleClick}>
        {heading} <i className="bi bi-caret-down"></i>
      </h4>
      {isExpanded && (
        <div style={{ position: 'relative', top: '100%', left: 0 }}>
          {items.map((item) => (
            <li 
            key={item} className={activeLink === item ? 'underline active' : ''}>
              <a href="#" onClick={() => data.goToSlide(item)}>
                {item}
              </a>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};

const App = ({ initialActiveLinkOne, initialActiveLinkTwo, initialActiveLinkThree }) => {
  const [activeLinkOne, setActiveLinkOne] = useState(initialActiveLinkOne);
  const [activeLinkTwo, setActiveLinkTwo] = useState(initialActiveLinkTwo);
  const [activeLinkThree, setActiveLinkThree] = useState(initialActiveLinkThree);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(0); // Set the first menu as initially expanded

  const handleLinkClickOne = (link) => {
    setActiveLinkOne(link);
  };

  const handleLinkClickTwo = (link) => {
    setActiveLinkTwo(link);
  };

  const handleLinkClickThree = (link) => {
    setActiveLinkThree(link);
  };

  const handleMenuClick = (index) => {
    setExpandedMenuIndex(index === expandedMenuIndex ? null : index);
  };
  const handleClick1 = () => {
    // Logic for handling click on the first item
    
  };
  
  const handleClick2 = () => {
    // Logic for handling click on the second item
  };
  
  const handleClick3 = () => {
    // Logic for handling click on the third item
  };
  
  const handleClick4 = () => {
    // Logic for handling click on the fourth item
  };
  

  const handleClicks = [handleClick1, handleClick2, handleClick3, handleClick4];
  
  return (
    <div className="intro ">
      <div style={{ alignSelf: 'baseline' }}>
        <DropdownMenu
          heading="Website Modules"
          items={[
            'Authentication Modules',
            'Home Page',
            'Product Page',
            'Shopping Cart',
            'Checkout',
            'User Account',
            'Customer Support',
            'Site Functionality',
          ]}
          activeLink={activeLinkOne}
          handleLinkClick={handleClicks}
          isExpanded={expandedMenuIndex === 0}
          handleClick={() => handleMenuClick(0)}
          
        />
        <DropdownMenu
          heading="Admin"
          items={['Hello1', 'Hello2', 'Hello3', 'Hello4']}
          activeLink={activeLinkTwo}
          handleLinkClick={handleLinkClickTwo}
          isExpanded={expandedMenuIndex === 1}
          handleClick={() => handleMenuClick(1)}
        >
          
        </DropdownMenu>
        <DropdownMenu
          heading="Third Party Integration"
          items={['Hello1', 'Hello2', 'Hello3', 'Hello4']}
          activeLink={activeLinkThree}
          handleLinkClick={handleLinkClickThree}
          isExpanded={expandedMenuIndex === 2}
          handleClick={() => handleMenuClick(2)}
        />
      </div>

      <div>
        <div className="photo" style={{ alignSelf: 'flex-start' }}>
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
