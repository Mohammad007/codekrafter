import React from 'react';
// import S from './pStyle.module.css';
import './pStyle.css';
import photo from './photo.jpg'
import Left from './menu-dropdown'
import Header from './header'

function Portfolio() {
  return (
    <div className='p-body' style={{height:'100%' , overflowY:''}}>
      {/* <Header /> */}
      {/* <div className="area" > */}
      <div className='p-main'>
        {/* <Left initialActiveLinkOne="Authentication Modules" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        <section className="section-2">
          <div className="line active-line">
            <div className="p-circle">1</div>
            <div className="line-title">Authentication Modules</div>
            <div className='hr-line'></div>
          </div>
          <div className="info">
            <ul>
              <li><a href="#">Verifies user identity</a></li>
              <li><a href="#">Enforces password policies</a></li>
              <li><a href="#">Validates user credentials</a></li>
              <li><a href="#">Allows user registration and login</a></li>
              <li><a href="#">Provides password reset and <br /> two-factor authentication</a></li>
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
      </div>


      {/* <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
    </div > */}
    </div>
  );
}

export default Portfolio;
