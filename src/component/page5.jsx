// import React from 'react';
// import S from './pStyle.module.css';
import photo from './photo.jpg';
import Left from './menu-dropdown'
import Header from './header'


function Portfolio() {
  return (
    <div className='p-body' style={{height:'100%' , overflowY:''}}>
            {/* <Header/> */}

            <div className='p-main'>
    {/* <Left initialActiveLinkOne="Checkout" initialActiveLinkTwo="" initialActiveLinkThree="" /> */}
    <div className='img-container' >
          <img className='p-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
        </div>
        
        <section className="section-2">
            <div className="line">
                <div className="p-circle">5</div>
                <div className="line-title">Checkout</div>
                <div className='hr-line'></div>
            </div>

            <div className="info">
            <img className='p-img responsive-img' src={photo} alt="" style={{ height: '20rem', marginLeft: '8rem' }} />
            <ul>
          <li><a href="#">Shipping and billing address form</a></li>
<li><a href="#">Payment method selection (credit card, PayPal, etc.)</a></li>
<li><a href="#">Order summary with itemized costs</a></li>
<li><a href="#">Confirmation and thank you page</a></li>

</ul>
             
            </div>
            {/* <div className="line">
                <div className="circle">6</div>
                <div className="line-title">CONTACT</div>
                <hr/>
            </div> */}
        </section>
        
            <div className="scroll-bar"><div className="scroll-circle"></div></div>
        
            </div>
    </div>
  );
}

export default Portfolio;
