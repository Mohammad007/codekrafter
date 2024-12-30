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
      {/* <Left initialActiveLinkOne="Shopping Cart" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
      <div className='img-container' >
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        
        <section className="section-2">
          <div className="line">
            <div className="p-circle">4</div>
            <div className="line-title">Shopping Cart</div>
            <div className='hr-line'></div>
          </div>

          <div className="info">
          <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
          <ul>          <li><a href="#">Detailed item list with prices and quantities</a></li>
<li><a href="#">Subtotal, taxes, and shipping costs</a></li>
<li><a href="#">Promo code or discount input field</a></li>
<li><a href="#">Checkout and continue shopping buttons</a></li>
</ul>
            
</div>         
           {/* <div className="line">
            <div className="circle">5</div>
            <div className="line-title">SKILLS</div>
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
