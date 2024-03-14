import React, { useEffect, useState } from 'react'
import './Blogs.css'
import user from '../assets/user.png'
import { db, onSnapshot, collection } from '../Firebase Config/Config'

export default function Blogs() {

  let [AllData, setAllData] = useState([])
  const getData = () => {

    const q = (collection(db, "AllBlogs"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let Array = []
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          Array.push(change.doc.data())
        }
        if (change.type === "modified") {
          Array.push(change.doc.data())
        }
        if (change.type === "removed") {
          Array.push(change.doc.data())
        }
      });
      setAllData(Array)
    });
  }

  useEffect(() => {
    getData()
  }, [])

  if (AllData.length == '') {
    return <div className="spinner-border text-primary spinerDiv" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  return (
    <div className='main'>
      <h1 id='welcome'><span>W</span>elCome All Members!</h1>
      <h3 id='ABlogs'>All Blogs</h3>

      <div className="blogMainDiv">

        {
          AllData.map((data, index) => {
            console.log(data);
            return (
              <div className='blogDiv' key={index}>
                <div className="blogDetailDiv">
                  <div className="userProfileImg">
                    <img src={user} alt="" id='userproimg' />
                  </div>
                  <div className="userNameDiv">
                    <h4 id='userproHead'>{data.Title}</h4>
                    <h6 id='userpronames'>{data.ProfileName} - <span>{data.Date}</span></h6>
                  </div>
                </div>
                <div className="blogDescDiv">
                  <p id='userblogpara'>{data.Blog}</p>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>

  )
}
