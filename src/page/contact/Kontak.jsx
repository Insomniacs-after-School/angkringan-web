import React from "react";
import './kontak.css'
import KonPro from "../../componen/img/kontak 2.png"
import {Button}from'../../componen/button/Button'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kontak = ()=>{
    const [inputDate, setInputDate] = useState({
        name:'',
        email:'',
        alamat:'',
        pesan:''
    })
    const navigate= useNavigate()
    const hendelSudmit =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/saran",inputDate)
        .then(res =>{
            alert("sukses")
            navigate("/")
        })
    }   
    return(
        <div className="Kontak">
            <div className="kontak-pro">
                <h1>Kontak</h1>
                <img src={KonPro} alt="" />
            </div>
            <div className="content"> 
                <h1>Hubungi kami</h1>
                <div className="row">
                    <div className="hub">
                        <h2>-Tidak bisa menemukan informasi yang Anda cari?</h2>
                        <h2>-ingin memberikan masukan atau saran?</h2>
                        <h2>-ingin memberikan penilaan atau kesan-kesan saat ditempat kami?</h2>
                    </div>
                <form onSubmit={hendelSudmit }>                    
                    <div className="inputbox">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Nama"  name="name" 
                        onChange={(e)=>setInputDate({...inputDate, name:e.target.value})}/>
                    </div>
                    <div className="inputbox">
                    <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email"
                        email='email'
                        onChange={(e)=>setInputDate({...inputDate, email:e.target.value})}/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="alamat">Alamat</label>
                        <input type="text" placeholder="alamat"
                        alamat='alamat' 
                        onChange={(e)=>setInputDate({...inputDate, alamat:e.target.value})}/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="pesan">Pesam</label>
                        <input  className="cpesan"type="text" placeholder="pensan"
                        pesan='pesan'
                        onChange={(e)=>setInputDate({...inputDate, pesan:e.target.value})}/>
                    </div>
                        <Button type='submite'className='in-button'onClick={inputDate}>Kirim</Button>
                </form>    
                </div>
                <iframe title="Contact Form" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.37984896642!2d110.85205749362075!3d-7.610572882521911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3d60a70e43b3%3A0x1bb7fe772d1e868d!2sWedangan%20Pojok%20Bambu!5e0!3m2!1sid!2ssg!4v1685596852189!5m2!1sid!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="maps"></iframe>
            </div>
            
        </div>
    )
}

export default Kontak