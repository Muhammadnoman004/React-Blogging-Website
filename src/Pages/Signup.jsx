import React, { useState } from 'react'

export default function Signup() {

    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let [confirmpassword, setconfirmpassword] = useState('')

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
        setname('')
        setemail('')
        setpassword('')
        setconfirmpassword('')
    }


    return (
        <div>
            <h1>SignUp</h1>
            <input onChange={NameInpValue} value={name} placeholder='Full Name' type="text" name="" id="1" /><br />
            <input onChange={EmailInpValue} value={email} placeholder='Email' type="email" name="" id="2" /><br />
            <input onChange={PassInpValue} value={password} placeholder='Password' type="password" name="" id="3" /><br />
            <input onChange={ConfirmPassInpValue} value={confirmpassword} placeholder='Confirm Password' type="password" name="" id="4" /><br />
            <button onClick={SignUpFun}>SignUp</button>

        </div>
    )
}
