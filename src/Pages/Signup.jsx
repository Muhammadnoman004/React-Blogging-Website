import React, { useState } from 'react'
import './Authentication.css'
import { auth, createUserWithEmailAndPassword } from '../Firebase Config/Config'

export default function Signup() {

    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let [confirmpassword, setconfirmpassword] = useState('')
    let New_Password;

    const NameInpValue = (e) => {
        setname(e.target.value)
    }
    const EmailInpValue = (e) => {
        setemail(e.target.value)
    }
    const PassInpValue = (e) => {
        setpassword(e.target.value)
    }
    const ConfirmPassInpValue = (e) => {
        setconfirmpassword(e.target.value)
    }
    const SignUpFun = () => {
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmpassword);
        if (name == '' || email == '' || password == '' || confirmpassword == '') {
            alert("Please fill all field")
        }
        else {
            if (password == confirmpassword) {
                New_Password = confirmpassword;
            }
            createUserWithEmailAndPassword(auth, email, New_Password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    setname('')
                    setemail('')
                    setpassword('')
                    setconfirmpassword('')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }

    }

    return (
        <div className='mainDiv'>
            <h1 id='head'>SignUp</h1>
            <input onChange={NameInpValue} value={name} className='form-control' placeholder='Full Name' type="text" name="" id="1" /><br />
            <input onChange={EmailInpValue} value={email} className='form-control' placeholder='Email' type="email" name="" id="2" /><br />
            <input onChange={PassInpValue} value={password} className='form-control' placeholder='Password' type="password" name="" id="3" /><br />
            <input onChange={ConfirmPassInpValue} value={confirmpassword} className='form-control' placeholder='Confirm Password' type="password" name="" id="4" /><br />
            <button onClick={SignUpFun} className='btn btn-primary LogsignUpBtn'>SignUp</button>


        </div>
    )
}
