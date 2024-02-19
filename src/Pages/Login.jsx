import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Authentication.css'
import { auth, signInWithEmailAndPassword } from '../Firebase Config/Config'
import Navbar from '../Navbar/Navbar'

export default function Login() {

    let navigate = useNavigate()
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')


    const EmailInpValue = (e) => {
        setemail(e.target.value)
    }
    const PassInpValue = (e) => {
        setpassword(e.target.value)
    }

    const LogInFun = () => {
        console.log(email);
        console.log(password);
        if (email == '' || password == '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Fill All Field!",
            });
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "LogIn successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    console.log(user);
                    setemail('')
                    setpassword('')
                    navigate('/dashboard')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: errorCode,
                    });
                });
        }
    }


    return (
        <div>

            <Navbar />
            <div className='mainDiv'>
                <h1 id='head'>LogIn</h1>
                <input onChange={EmailInpValue} value={email} className='form-control' placeholder='Email' type="email" name="" id="1" /><br />
                <input onChange={PassInpValue} value={password} className='form-control' placeholder='Password' type="password" name="" id="2" /><br />
                <button onClick={LogInFun} className='btn btn-primary LogsignUpBtn'>Login</button>

            </div>
        </div>
    )
}
