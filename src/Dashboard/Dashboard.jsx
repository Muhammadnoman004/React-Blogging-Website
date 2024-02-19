import React from 'react'
import './Dashboard.css'
import logo from '../assets/blog-removebg-preview.png'

export default function Dashboard() {
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
              <button className='btn fullName'>Full Name</button>
              <button className='btn home'>Home</button>
              <button className='btn btn-primary logout'>Logout</button>
            </ul>

          </div>
        </div>
      </nav>
      <br /><br /><br /><br />
      <h1 id='dash'><span>D</span>ashboard</h1>
    </div>
  )
}
