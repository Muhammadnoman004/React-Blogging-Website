import React from 'react';
import { Link } from 'react-router-dom';
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
                                <a className="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <Link to={'/login'}><button className='btn LoginNavBtn'>Login</button></Link>
                            <Link to={'/signup'}><button className='btn btn-primary SinupNavBtn'>Signup</button></Link>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
