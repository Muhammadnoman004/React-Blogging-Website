import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
