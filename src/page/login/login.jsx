import React, { useState } from "react";
import {Button}from'../../componen/button/Button'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

const Login = ()=>{
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [msg,setMsg]= useState("")
    const navigate= useNavigate()
    const Auth= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/login',{
                email: email,
                password:password,
            })
            localStorage.setItem("Token",res.data.data.accessToken)
            navigate("/Dashboard")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
        <div className="main-login">
            <div className="row-login">
            <p className="nottif">{msg}</p>
                <h1>Login</h1>
            <form onSubmit={Auth}>
                <div className="input-login">
                <label htmlFor="password">Email</label>
                    <input type="email" placeholder="email"
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-login">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*********"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Button className='login-buton'>Login</Button>
            </form>
            </div>
        </div>
    )
}

export default Login