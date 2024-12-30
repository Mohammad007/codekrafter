import React from 'react';
// import './pStyle.css';
import photo from './photo.jpg'
import Left from './menu-dropdown'
import PHeader from './header'

function Portfolio() {
  return (
    <div>
            <PHeader/>

      <main>
      <Left initialActiveLinkOne="Product Page" initialActiveLinkTwo="" initialActiveLinkThree="" />
      {/* <Left initialActiveLinkOne="Site Functionality" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
           <section className="section-2">
          <div className="line active-line">
            <div className="p-circle">1</div>
            <div className="line-title">INTRODUCTION</div>
            <hr />
          </div>
          <div className="info">
            <ul>
            <li><a href="#">Verifies user identity</a></li>
<li><a href="#">Enforces password policies</a></li>
<li><a href="#">Validates user credentials</a></li>
<li><a href="#">Allows user registration and login</a></li>
<li><a href="#">Provides password reset and two-factor authentication</a></li>
<li><a href="#">Critical for website/application security</a></li>
<li><a href="#">Prevents unauthorized access</a></li>
<li><a href="#">Protects user data</a></li>
            </ul>
          </div>
          {/* <div className="line">
            <div className="circle">2</div>
            <div className="line-title">ABOUT</div>
            <hr />
          </div> */}
        </section>
        <div className="scroll-bar">
          <div className="scroll-circle"></div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
