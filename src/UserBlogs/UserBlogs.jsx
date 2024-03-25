import React from 'react'
import './UserBlogs.css'
import Navbar from '../Navbar/Navbar'
import userImg from '../assets/user.png'
import { Link } from 'react-router-dom'

export default function UserBlogs() {
  return (
    <div>
      <Navbar /><br /><br /><br /><br />
      <Link to={'/'}><h1 id='BackToHome'>Back to home!</h1></Link>
      <h3 id='AllBlogs'>All Blogs</h3>

      <div className='UserBlogMainDiv'>

        <div className='UserBlogDiv'>
          <div className="UserBlogDetailDiv">
            <div className="userProfileImg">
              <img src={userImg} alt="" id='userImg' />
            </div>
            <div className="userNameDiv">
              <h4 id='userHead'>Softwere enginner</h4>
              <h6 id='userNames'>Muhammad Noman - <span>{new Date().toLocaleString()}</span></h6>
            </div>
          </div>
          <div className="blogDescDiv">
            <p id='userPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo non ullam ratione, aliquid omnis laboriosam quas reprehenderit perferendis numquam, molestias sed voluptatibus? Veritatis, commodi! Adipisci non temporibus quos rerum.</p>
          </div>
        </div>

      </div>

      <div className="UserProfileDiv">
        <img src={userImg} alt="" id='UserProfileImg' />
        <h2 id='UserProfileName'>User Name</h2>
        <h5 id='UserProfileEmail'>ABC@gmail.com</h5>
      </div>

    </div>
  )
}
