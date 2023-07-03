import React from "react";
import './login.css'

import {Button}from'../../componen/button/Button'
const Login = ()=>{

    return(
        <div className="main-login">
            <div className="row-login">
                <h1>Login</h1>
            <form>
                <div className="input-login">
                <label htmlFor="password">Email</label>
                    <input type="email" placeholder="email"/>
                </div>
                <div className="input-login">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*********"/>
                </div>
                <Button className='login-buton'>Login</Button>
            </form>
            </div>
        </div>
    )
}

export default Login