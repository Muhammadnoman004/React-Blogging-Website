import React from 'react'
import './Blogs.css'
import user from '../assets/user.png'

export default function Blogs() {
  return (
    <div className='main'>
      <h1 id='welcome'><span>W</span>elCome All Members!</h1>
      <h3 id='ABlogs'>All Blogs</h3>
      <div className='blogDiv'>
        <img src={user} alt="" id='userproimg' />
        <h4 id='userproHead'>Artificial intelligent</h4>
        <h6 id='userpronames'>Muhammad Noman - <span>{new Date().toLocaleDateString()}</span></h6>
      </div>
    </div>

  )
}
