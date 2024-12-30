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
    <div className='img-container' >
          <img  className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        <section className="section-2">
            <div className="line">
                <div className="p-circle">2</div>
                <div className="line-title">Home Page</div>
                <div className='hr-line'></div>
            </div>

            <div className="info">
            <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
            <ul>
            <li><a href="#">Hero section with compelling imagery and tagline</a></li>
<li><a href="#">Featured products or categories</a></li>
<li><a href="#">Promotions and deals</a></li>
<li><a href="#">Testimonials or customer reviews</a></li>
<li><a href="#">Call-to-action buttons and links</a></li>
<li><a href="#">Navigation menu</a></li>
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
