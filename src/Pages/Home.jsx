import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Blogs from '../AllBlogs/Blogs'
import { auth, onAuthStateChanged } from '../Firebase Config/Config';

export default function Home() {

    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            navigate("/dashboard");
        } else {
            console.log("User not found");
        }
    });

    return (
        <div>
            <Navbar /><br /><br /><br /><br />
            <Blogs />
        </div>
    )
}
