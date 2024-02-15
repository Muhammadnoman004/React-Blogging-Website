import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item homenav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
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
