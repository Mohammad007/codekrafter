import React, { useState } from 'react';
// import './pStyle.css';
import photo from './photo.jpg';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import MenuDropdown from './menu-dropdown';
function Left() {
  const [activeLink, setActiveLink] = useState('home');
  const [isActive, setIsActive] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };



  return (
    <div>
      <section>
        <div className="intro">

          <div>
<MenuDropdown/>
          </div>







          {/* <div className="photo">
            <img src={photo} alt="" />
          </div> */}
        </div>



       
      </section>
    </div>
  );

  }
export default Left;
