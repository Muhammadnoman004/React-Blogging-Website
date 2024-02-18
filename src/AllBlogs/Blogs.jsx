import React from 'react'
import './Blogs.css'
import user from '../assets/user.png'

export default function Blogs() {
  return (
    <div className='main'>
      <h1 id='welcome'><span>W</span>elCome All Members!</h1>
      <h3 id='ABlogs'>All Blogs</h3>
    <div className='CardBlog'>

      <div className='blogDiv'>
        <img src={user} alt="" id='userproimg' />
        <h4 id='userproHead'>Artificial intelligent</h4>
        <h6 id='userpronames'>Muhammad Noman - <span>{new Date().toLocaleDateString()}</span></h6>
        <p id='userblogpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis repellat mollitia consectetur nihil repudiandae voluptatibus. Quia optio obcaecati voluptate itaque perferendis ipsam odit. Hic quae officiis illum quasi deserunt?
          Voluptatem aspernatur totam doloremque adipisci ut blanditiis, laborum consequuntur, cumque nostrum deserunt quia laboriosam quo repellat molestias earum praesentium recusandae ullam ipsa, nemo ad quae. Modi provident sit praesentium nesciunt!</p>
      </div>
    </div>

    </div>

  )
}
