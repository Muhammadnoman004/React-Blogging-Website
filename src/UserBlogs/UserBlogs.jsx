import React, { useEffect, useState } from 'react'
import './UserBlogs.css'
import Navbar from '../Navbar/Navbar'
import userImg from '../assets/user.png'
import { Link } from 'react-router-dom'
import { collection, query, where, getDocs, db } from '../Firebase Config/Config'

export default function UserBlogs() {

  const [userBlog, setuserBlog] = useState([])

  const URlParams = new URLSearchParams(window.location.search)
  const UserParams = URlParams.get("user")
  console.log(UserParams);

  const getUserBlog = async () => {

    const q = query(collection(db, "AllBlogs"), where("Uid", "==", UserParams));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setuserBlog(doc.data())
    });
  }
  useEffect(() => {
    getUserBlog()
  }, [])

  return (
    <div>
      <Navbar /><br /><br /><br /><br />
      <Link to={'/'}><h1 id='BackToHome'><img id='backArrow' src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-left-direction-icon.svg" alt="" /> Back to home!</h1></Link>

      <div className="UserProfileDiv">
        <div className='UserProfileInnerDiv'>
          <img src={userImg} alt="" id='UserProfileImg' />
          <h2 id='UserProfileName'>User Name</h2>
          <h5 id='UserProfileEmail'>ABC@gmail.com</h5>
        </div>
      </div>

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

    </div>
  )
}
