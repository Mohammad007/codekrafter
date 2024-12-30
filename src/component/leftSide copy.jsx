import React, { useState } from 'react';
// import './pStyle.css';
import photo from './photo.jpg';
// import { Dropdown, Selection } from 'react-dropdown-now';
// import 'react-dropdown-now/style.css';
import MenuDropdown from './menu-dropdown';
function Left() {
  const [activeLink, setActiveLink] = useState('home');
  const [isActive, setIsActive] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  // const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const parentStyle = {
    height: isActive ? '2.2rem' : '',
    alignSelf: 'flex-start',
    overflow: 'hidden',
    transition:'all .5',
    // borderBottom:'2px solid white',

  };
    // ............................................................
  const handleClicktwo = () => {
    setIsActive(!isActive);
  };
  // const [isClicked, setIsClicked] = useState(false);
  const parentStyletwo = {
    height: isActive ? '' : '2.2rem',
    alignSelf: 'flex-start',
    overflow: 'hidden',
    transition:'all .5',
    // borderBottom:'2px solid white',
    
  };

    // ............................................................

        // ............................................................
  const handleClickthree = () => {
    setIsActive(!isActive);
  };
  // const [isClicked, setIsClicked] = useState(false);
  const parentStylethree = {
    height: isActive ? '' : '2.2rem',
    alignSelf: 'flex-start',
    overflow: 'hidden',
    transition:'all .5',
    // borderBottom:'2px solid white',
    
  };

    // ............................................................

  // const handleClick2 = () => {
  //   setIsActive(!isActive);
  // };
  // const parentStyle2 = {
  //   height: isActive ? '2.2rem' : '',
  //   alignSelf: 'flex-start',
  //   overflow: 'hidden',
  //   transition:'all .5',
  //   // borderBottom:'2px solid white',
    
  // };
  // const handleClick3 = () => {
  //   setIsActive(!isActive);
  // };
  // const parentStyle3 = {
  //   // height: isActive ? '2.2rem' : '',
  //   alignSelf: 'flex-start',
  //   overflow: 'hidden',
  //   transition:'all .5',
  //   // borderBottom:'2px solid white',
  //   // border: isActive ? '2px solid white' : ''
    
  // };
  return (
    <div>
      <section>
        <div className="intro">

          <div>
         <ul style={parentStyle}>
      <h4 className='rectangle' onClick={handleClick}>Website Modules <i className="bi bi-caret-down"></i></h4>

            <li className={activeLink === 'Authentication Modules' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('Authentication Modules')}>
              Authentication Modules
              </a>
            </li>

            <li className={activeLink === 'home' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('home')}>
                Home Page
              </a>
            </li>
            <li className={activeLink === 'product' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('product')}>
                Product Page
              </a>
            </li>
            <li className={activeLink === 'cart' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('cart')}>
                Shopping Cart
              </a>
            </li>
            <li className={activeLink === 'checkout' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('checkout')}>
                Checkout
              </a>
            </li>
            <li className={activeLink === 'account' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('account')}>
                User Account
              </a>
            </li>
            <li className={activeLink === 'support' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('support')}>
                Customer Support
              </a>
            </li>
            <li className={activeLink === 'marketing' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('marketing')}>
                Marketing and Promotion
              </a>
            </li>
            <li className={activeLink === 'functionality' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('functionality')}>
                Site Functionality
              </a>
            </li>
            </ul>
            {/* ........................ */}
        {/* new */}
         <ul style={parentStyletwo}>
        <h4 className='rectangle' onClick={handleClicktwo}>Website Modules <i className="bi bi-caret-down"></i></h4>
        <li className={activeLink === 'marketing' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('marketing')}>
                Marketing and Promotion
              </a>
            </li>
            <li className={activeLink === 'functionality' ? 'underline active' : ''}>
              <a href="#" onClick={() => handleLinkClick('functionality')}>
                Site Functionality
              </a>
            </li>
          </ul>
            {/* ........................ */}



           <ul style={parentStylethree}>
        <h4 className='rectangle' onClick={handleClickthree}>Website Modules <i className="bi bi-caret-down"></i></h4>
<li>hello3</li>
<li>hello4</li>
          </ul> 
            {/* ........................ */}
{/* <MenuDropdown/> */}
          </div>







          <div className="photo">
            <img src={photo} alt="" />
          </div>
        </div>



       
      </section>
    </div>
  );

  }
export default Left;
