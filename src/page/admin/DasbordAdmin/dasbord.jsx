import React from "react";
import { useEffect,useState } from 'react'
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import axios from 'axios'
import { Button } from "../../../componen/button/Button";
import { useNavigate ,Link } from "react-router-dom";
const Dasbord = ()=>{
    const [products, setPoroducts]= useState([])
    const [masukan, setMasukan]= useState([])
    // const [notification, setNotification] = useState('');
    const navigatet= useNavigate()

    useEffect(()=>{
        getProducts()
        getMasukan()
    },[])

    const getProducts = async()=>{
        const products = await axios.get("http://localhost:5000/products");
        setPoroducts(products.data.data)
    }
    const deletProducts  = async(id)=>{
        if (window.confirm('Anda yakin ingin menghapus produk ini?')) {
            await axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => {
                // setNotification('Produk berhasil dihapus.');
                getProducts();
                navigatet("/Dasbord")
            }).catch((error) => {
                // Tangani kesalahan jika ada
                console.error(error);
                // setNotification('Gagal menghapus produk.');
            });

        } else {
            // Jika pengguna membatalkan penghapusan
            alert('Penghapusan produk dibatalkan.');
        }
        }

// =======================================CODE MASUKAN===========================

    const getMasukan = async()=>{
        const masukan = await axios.get("http://localhost:5000/saran");
        setMasukan(masukan.data.data)
    }

    const deletMasukan  = async(id)=>{
        if (window.confirm('Anda yakin ingin menghapus produk ini?')) {
            await axios.delete(`http://localhost:5000/saran/${id}`)
            .then(() => {
                // setNotification('Produk berhasil dihapus.');
                getMasukan();
                navigatet("/Dasbord")
            }).catch((error) => {
                // Tangani kesalahan jika ada
                console.error(error);
                // setNotification('Gagal menghapus produk.');
            });

        } else {
            // Jika pengguna membatalkan penghapusan
            // alert('Penghapusan produk dibatalkan.');
        }
        }

    return(
        <div className="Dasbord">
            <NavbarAdmin/>
            <div className=" tabel-Produc">
            <h1>Tabel Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Foto</th>
                        <th>Harga</th>
                        <th>Jenis</th>
                        <th>edit&hapus</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((item,index)=>{
                            return(
                            <tr key={index.id}>
                                <td>{item.name}</td>
                                <td><img src={`http://localhost:5000/foto/${item.foto}`} alt={item.name}className="product-image" /></td>
                                <td>{item.harga}</td>
                                <td>{item.jenis}</td>
                                <td>
                                    <Button type='submite'className='edit-button'>edit</Button>
                                    <button className='hapus-button' onClick={() => deletProducts(item.id)  }>hapus</button>
                                </td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
            {/* {notification && <div>{notification}</div>} */}
            <h1>Tabel Pesan</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>email</th>
                        <th>alamat</th>
                        <th>pesan</th>
                        <th>edit&hapus</th>
                    </tr>
                </thead>
                <tbody>
                {
                masukan.map((item)=>(
                            <tr ky={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.alamat}</td>
                                <td>{item.pesan}</td>
                                <td>
                                    <Link to={`/DasbordEdit/${item.id}`} className='edit-button'>edit</Link>
                                    <button className='hapus-button'onClick={(id) => deletMasukan(item.id)  }>hapus</button>
                                </td>
                            </tr>
                            ))}
                </tbody>
            </table>  
            </div>
        </div>
    )
}

export default Dasbord