import './pStyle.css'
import React, { useState } from 'react';
// import S from './pStyle.module.css';
import photo from './photo.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBtn from './house-fill.svg'


function header() {
    return (
        <div className='p-header'>
            <div className='p-nav'>
                <div className="p-logo">
                    <h2>E-Commerce</h2>
                    <span>Website Modules</span>
                </div>
                <ul style={{ marginRight: "25px" }}>
                    <li>
                    <div className="contact-text my-auto py-80">
                        <Link to="" className=" btn-new">Get In Touch <i className="fa-solid fa-angle-right ms-1"></i></Link>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default header;
