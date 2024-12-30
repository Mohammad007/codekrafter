import React from 'react';
// import S from './pStyle.module.css';
import photo from './photo.jpg'
import Left from './menu-dropdown'
import Header from './header'

function Portfolio() {
  return (
    <div className='p-body' style={{height:'100%' , overflowY:''}}>
            {/* <Header/> */}

            <div className='p-main'>
      {/* <Left initialActiveLinkOne="Site Functionality" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
       
      <div className='img-container' >
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
         <section className="section-2">
          <div className="line active-line">
            <div className="p-circle">8</div>
            <div className="line-title">Site Functionality</div>
            <div className='hr-line'></div>
          </div>

          <div className="info">
          <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
          {/* <ul>
            <li><a href="#">Email subscription form and newsletter</a></li>
<li><a href="#">Social media integration and sharing options</a></li>
<li><a href="#">Affiliate program and referral links</a></li>
<li><a href="#">Loyalty program and rewards system</a></li>
            </ul> */}
            <ul>
            <li><a href="#">Fast and responsive design</a></li>
<li><a href="#">Search bar with predictive search results</a></li>
<li><a href="#">Filter and sort options for products</a></li>
<li><a href="#">Multilingual and multi-currency support</a></li>
<li><a href="#">SSL encryption and secure checkout process</a></li>
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
    </div>
  );
}

export default Portfolio;
