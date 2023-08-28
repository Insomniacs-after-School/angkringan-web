import React, { useState } from "react";
import './register.css'
import { useNavigate } from "react-router-dom";
import {Button}from'../../componen/button/Button'
import axios from "axios";


const Register = ()=>{
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confpassword, setConfPassword]= useState("")
    const [msg,setMsg]= useState("")

    const navigate= useNavigate()
    const Register= async(e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/register',{
                name:name,
                email: email,
                password:password,
                confpassword:confpassword
            })
            navigate("/login")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
        <div className="main-regis">
            <div className="row-regis">
                <p className="nottif">{msg}</p>
                <h1>Registrasi</h1>
            <form onSubmit={Register}>
                <div className="input-regis">
                <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name"
                    value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="input-regis">
                <label htmlFor="email">Email</label>
                    <input type="email" placeholder="email"
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-regis">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*********"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="input-regis">
                    <label htmlFor="password">confirm Password</label>
                    <input type="password" placeholder="*********"
                    value={confpassword} onChange={(e)=>setConfPassword(e.target.value)}/>
                </div>
                <Button className='regis-buton'>Register</Button>
            </form>
            </div>
        </div>
    )
}

export default Register