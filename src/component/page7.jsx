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
      {/* <Left initialActiveLinkOne="Customer Support" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
      <div className='img-container' >
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        
        <section className="section-2">
          <div className="line active-line">
            <div className="p-circle">7</div>
            <div className="line-title">Customer Support</div>
            <div className='hr-line'></div>
          </div>

          <div className="info">
          <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
          <ul>
                    <li><a href="#">Contact us page with multiple options (email, phone, live chat)</a></li>
<li><a href="#">FAQ section with common questions and answers</a></li>
<li><a href="#">Knowledge base or help center with articles and tutorials</a></li>
<li><a href="#">Returns and refunds policy</a></li>
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
