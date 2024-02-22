import React, { useEffect, useState } from 'react'
import './Blogs.css'
import user from '../assets/user.png'
import { db, onSnapshot, collection } from '../Firebase Config/Config'

export default function Blogs() {

  let [AllData, setAllData] = useState([])
  const getData = () => {

    const q = (collection(db, "AllBlogs"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setAllData(change.doc.data())
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
        }
      });
    });
  }

  useEffect(() => {
    getData()
  }, [])

  if (AllData.length == '') {
    return <h1>loading...</h1>
  }

  return (
    <div className='main'>
      <h1 id='welcome'><span>W</span>elCome All Members!</h1>
      <h3 id='ABlogs'>All Blogs</h3>

      <div className="blogMainDiv">
        <div className='blogDiv'>
          <div className="blogDetailDiv">
            <div className="userProfileImg">
              <img src={user} alt="" id='userproimg' />
            </div>
            <div className="userNameDiv">
              <h4 id='userproHead'>{AllData.Title}</h4>
              <h6 id='userpronames'>{AllData.ProfileName} - <span>{AllData.Date}</span></h6>
            </div>
          </div>
          <div className="blogDescDiv">
            <p id='userblogpara'>{AllData.Blog}</p>
          </div>
        </div>
      </div>

    </div>

  )
}
