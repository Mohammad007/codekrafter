import React from 'react';
// import S from './pStyle.module.css';
import photo from './photo.jpg';
import page2 from './page2';
import Left from './menu-dropdown'
import Header from './header'

// ................

// ................


function Portfolio() {
  return (
    <div className='p-body' style={{height:'100%' , overflowY:''}}>
            {/* <Header/> */}

            <div className='p-main'>
    {/* <Left initialActiveLinkOne="Home Page" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
    {/* <div className='img-container' style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}> */}
    <div className='img-container' >

          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        <section className="section-2">
            <div className="line">
            <div className="p-circle">1</div>
            <div className="line-title">Authentication Modules</div>
                <div className='hr-line' style={{width:'9rem'}}></div>
            </div>
            
            <div className="info">
          <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />

            <ul>
              <li><a href="#">Designing a new Web or a App</a></li>
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
                <div className="circle">3</div>
                <div className="line-title">SERVISES</div>
                <hr/>
            </div> */}
        </section>
        
            <div className="scroll-bar"><div className="scroll-circle"></div></div>
        
            </div>
    </div>
  );
}

export default Portfolio;
