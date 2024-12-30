import React from 'react';
// import S from './pStyle.module.css';
import photo from './photo.jpg';
import Left from './menu-dropdown'
import Header from './header'

function Portfolio() {
  return (
    <div className='p-body' style={{height:'100%' , overflowY:''}}>
           {/* <Header/> */}

           <div className='p-main'>
      {/* <Left initialActiveLinkOne="Product Page" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
      <div className='img-container' >
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        <section className="section-2">
          <div className="line">
            <div className="p-circle">3</div>
            <div className="line-title">Product Page</div>
            <div className='hr-line'></div>
          </div>

          <div className="info">
          <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
          <ul>
            <li><a href="#">Product title and description</a></li>
<li><a href="#">High-quality product images and videos</a></li>
<li><a href="#">Product options (color, size, etc.)</a></li>
<li><a href="#">Product reviews and ratings</a></li>
<li><a href="#">Related products or recommended items</a></li>
<li><a href="#">Add to cart and checkout buttons</a></li>
</ul>
            
</div>
{/*  */}
          {/* <div className="line">
            <div className="circle">4</div>
            <div className="line-title">EXPERIENCE</div>
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
