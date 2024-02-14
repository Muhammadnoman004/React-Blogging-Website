import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../Firebase Config/Config'

export default function Login() {

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
        setemail('')
        setpassword('')

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <div>
            <h1>LogIn</h1>
            <input onChange={EmailInpValue} value={email} placeholder='Email' type="email" name="" id="1" /><br />
            <input onChange={PassInpValue} value={password} placeholder='Password' type="password" name="" id="2" /><br />
            <button onClick={LogInFun}>SignUp</button>

        </div>
    )
}
