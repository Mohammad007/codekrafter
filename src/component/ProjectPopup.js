import React from 'react'
import { Link } from 'react-router-dom';


function ProjectPopup(props) {
  return (
    props.trigger
  ) ? (
    <div className='popup proj-modal'>
      <div className='popup-inner'>
        <button className='close-btn nav-btn' onClick={() => props.setTrigger(false)}><i className="fa-solid fa-xmark"></i></button>
      
        <div className="product-modal">

<img src={props.image} alt="" />

</div>
        </div>



      </div >

    ) : "";
}

export default ProjectPopup