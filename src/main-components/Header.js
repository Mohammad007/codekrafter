// import { useEffect, useRef } from 'react';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {

    const [isOpen, setOpen] = useState(false);
    // const [isClose, setClose] = useState(false);
    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    // let menuRef = useRef();

    // useEffect(() => {
    //     document.addEventListener("mousedown", (event) => {
    //         if (!menuRef.current.contains(event.target)) {
    //             setOpen(false);
    //         }
    //     });
    // });

    return (
        <>
            <header className="header">


                <div className="container">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                        {/* <!-- <div className="container-fluid"> --> */}
                        <div className="header-main">

                            <div className="open-nav-menu rode">
                                <span onClick={toggleOpen} ><i className="fa-solid fa-bars"></i></span>
                            </div>
                            <div className={isOpen ? 'menu-overlay active' : 'menu-overlay'}>
                            </div>
                            {/* <!-- navigation menu start --> */}
                            <nav  className={isOpen ? 'open nav-menu uk-navbar-right' : 'nav-menu uk-navbar-right'}>
                                <div className=''>

                                    <Link className="close-nav-menu navbar-brand1" onClick={toggleOpen} to="">
                                        <i className="fas fa-times"></i>
                                    </Link>


                                    <ul className="menu" style={{ marginBottom: "0px" }}>
                                        <li className="menu-item">
                                            <NavLink to="/" className={({isActive}) => (isActive ? "active" : '')} >Home</NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/about"  className={({isActive}) => (isActive ? "active" : '')} > About Us</NavLink>
                                        </li>
                                        <li className="hide-or-show menu-item">
                                            <NavLink aria-current="page" className={({isActive}) => (isActive ? "active" : '')} to="/saas-services">SAAS Services</NavLink>
                                        </li>
                                        

                                        <li className="hide-or-show menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/website-development">Website Development</NavLink>
                                        </li>

                                        <li className="hide-or-show menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/application-development">Mobile App Development</NavLink>
                                        </li>
                                        <li className="hide-or-show menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/digital-marketing">Digital Marketing</NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/industries">Industries</NavLink>
                                        </li>




                                        {/* <li className="menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/consulting-services">Consulting Services</NavLink>
                                        </li> */}




                                        {/* <!-- hide --> */}

                                        <li className="menu-item">
                                            <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/contact">Contact Us</NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </nav>

                            {/* <!-- navigation menu end --> */}
                        </div>
                        <div className="hed mart d-flex align-items-center">
                            <Link className="navbar-brand" to="/"><img className="show-1" src="assets/Images/logo-Final.png"
                                width="120px" alt="" /><img className="show-2" src="assets/Images/logo-light.png" width="120px"
                                    alt="" /></Link>

                        </div>
                        <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>

                        <div className="collapse navbar-collapse last-nav" id="navbarNav">
                            <ul className="navbar-nav last-nav">
                                <li className="nav-item">
                                    <NavLink  className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} aria-current="page" to="/saas-services">SAAS Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/website-development">Website Development</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/application-development">Mobile App Development</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/digital-marketing">Digital Marketing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')}>Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dddhh"> </div>
                        {/* <!-- </div> --> */}
                    </nav>

                </div>

            </header>
        </>
    )
}

export default Header