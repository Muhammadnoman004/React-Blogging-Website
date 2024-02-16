import React from 'react';
import './Navbar.css';
import logo from '../assets/blog-removebg-preview.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid" id='nav'>
                    <img src={logo} alt="" id='logo' />
                    <a className="navbar-brand navtext" href="#">MyBlog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item homenav">
                                <a className="nav-link active navtext" aria-current="page" href="#"></a>
                            </li>
                            <button className='btn LoginNavBtn'>Login</button>
                            <button className='btn btn-primary SinupNavBtn'>Signup</button>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
