import React, { useEffect } from "react";
import './dasbord.css'
import {Button} from'../../../componen/button/Button'
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import axios from "axios";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const Edit = ()=>{
    const [inputDate, setInputDate] = useState({
        name:'',
        email:'',
        alamat:'',
        pesan:''
    })
    const navigate= useNavigate()
    const hendelSudmit =(e)=>{
        e.preventDefault();
        axios.patch("http://localhost:5000/saran",inputDate,
        )
        .then(res =>{
            alert("sukses")
            navigate("/Dasbord")
        })
    }
    
    useEffect(()=>{
        getProductsById()
    },[])
    
    const [inName, setInname] =useState('')
    const [inFoto, setInfoto] =useState('')
    const [inHarga, setInharga] =useState('')
    const [inJenis, setInjenis] =useState('')
    const [Preview, setPreview] =useState('')
    const navigatet= useNavigate()
    
    const loadImage =(e) =>{
        const image = e.target.files[0]
        setInfoto(image)
        setPreview(URL.createObjectURL(image))
    }
    const {id}= useParams()
    const getProductsById = async() =>{
        const response= await axios.Axiosget(`http://localhost:5000/products/${id}`)
        const productData = response.data;
        setInname(productData.data.name);
        setInharga(productData.data.harga);
        setInfoto(productData.data.foto);
        setInjenis(productData.data.jenis);
        setPreview(productData.data.foto)
    }
    
    const hendelSudmitPro = async(e)=>{
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',inName)
        formData.append('foto', inFoto)
        formData.append('harga', inHarga)
        formData.append('jenis', inJenis)
        await axios.post("http://localhost:5000/products",formData ).then(res =>{
            alert("sukses")
            navigatet("/Dasbord")
        })
    }   
    return(
        <div className="Kontak">
            <NavbarAdmin/>
            <div className="content"> 
                <div className="row">
                    <form onSubmit={hendelSudmitPro } method="POST" encType="multipart/form-data">
                        <h1>input data produk</h1>                    
                    <div className="inputbox">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Nama"  name="name" 
                        onChange={(e)=>setInname(e.target.value)}/>
                    </div>
                    <div className="inputbox">
                    <label htmlFor="email">foto</label>
                        <input type="file" placeholder="email"
                        foto='foto' 
                        onChange={loadImage}/>
                        {Preview ? (
                            <figure className="image">
                                <img src={Preview} alt="preview image" />
                            </figure>
                        ) : (
                            <p>No preview available</p>
                        )}
                    </div>
                    <div className="inputbox">
                        <label htmlFor="harga">harga</label>
                        <input type="text" placeholder="harga"
                        harga='harga'
                        onChange={(e)=>setInharga(e.target.value)}/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="jenis">jenis</label>
                        <input  className="cpesan"type="text" placeholder="pensan"
                        jenis='jenis'
                        onChange={(e)=>setInjenis(e.target.value)}/>
                    </div>
                        <Button type="submit"className='in-button'>Save</Button>
                </form>
{/* batas pesan */}
                <form onSubmit={hendelSudmit }>
                    <h1>input data Pesan</h1>                    
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
                        <Button type='submite'className='in-button'onClick={inputDate}>Save</Button>
                </form>    
                </div>
            </div>
            
        </div>
    )
}

export default Edit