import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Navbar from '../Navbar/Navbar';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signup/login' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
