// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
// import CircleCarousel from './CircleCarousel';
import "./dharma-erp.css"


const HomeMain1 = () => {

  return (
    <>
      <div className="erp-responsive ">
      {/* <div className="py-90 position-relative ">
        <div className="container home-large-txt text-center">
          <h1># We are Mumbai's <br /> One of the best <br />  Tech Development &amp; <br />  Digital Marketing Companies</h1>
        </div> */}
        {/* <div className="large-heading-img">
                <img src="assets/Images/gif/large-heading.png" alt="" />
                </div> */}
      {/* </div> */}


      <div className="dharma-bg " >

        <div className="main-title text-center ">
          <h2>Our Products</h2>

        </div>
        <div className="container ">

          <Link className='text-d-none' to="/saas-services">
            <div className="erp-cpu my-auto erp-heading">
              <h6>Dharma <br /> ERP</h6>
            </div>
          </Link>

          <div className='erp-boxs-cont'>


            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/admin.png" width="100px" alt="" />
              </div>
              <h6>User Admin</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/finance.png" width="100px" alt="" />
              </div>
              <h6>Finance</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/crm.png" width="100px" alt="" />
              </div>
              <h6>CRM</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/sales.png" width="100px" alt="" />
              </div>
              <h6>Sales</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/supply-chain.png" width="100px" alt="" />
              </div>
              <h6>Supply  Chain <br/>  Management</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/database.png" width="100px" alt="" />
              </div>
              <h6>Data Service</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/mrp.png" width="100px" alt="" />
              </div>
              <h6>MRP</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/deadline.png" width="100px" alt="" />
              </div>
              <h6>Project <br /> Management</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/production.png" width="100px" alt="" />
              </div>
              <h6>Production</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/inventory.png" width="100px" alt="" />
              </div>
              <h6>Inventory</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/service.png" width="80px" alt="" />
              </div>
              <h6>Service</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/hr.png" width="100px" alt="" />
              </div>
              <h6>Human <br/> Resource</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/sub-contrasting.png" width="100px" alt="" />
              </div>
              <h6>Sub <br/> Contracting</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/manufacturing.png" width="100px" alt="" />
              </div>
              <h6>Manufacturing</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/point-of-sale.png" width="100px" alt="" />
              </div>
              <h6>Point of sale</h6>
            </div>

            <div >
              <div className="left-erp-bx">
              <img src="assets/Images/gif/purchase.png" width="100px" alt="" />
              </div>
              <h6>Purchase</h6>
            </div>



          </div>

        </div>
      </div>
      </div>

    </>
  )
}

export default HomeMain1