import axios from 'axios';
import { React,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Navigate } from 'react-router-dom';

export default function Product() {
  const [products, setPoroducts]=useState([])

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async()=>{
    const storedAccessToken = localStorage.getItem('Token');
    console.log(storedAccessToken)
  
    try {
        
        const products = await axios.get("http://localhost:5000/products",{
            headers: {
                Authorization: `Bearer ${storedAccessToken}`
            }
        });
        setPoroducts(products.data.data)
    } catch (error) {
        
    }
  }
  const navigatet =Navigate()
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
        alert('menghapusan produk dibatalkan.');
    }
    }
  return (
      <div className='poruct'>
        <div>

      {products.map((item,index)=>{return(
        <div key={index}>
        <img src={`http://localhost:5000/foto/${item.foto}`} alt={item.name}className="product-image" />
        <h1>{item.name}</h1>
        <h2>{item.harga}</h2>
        <h3>{item.jenis}</h3>
        <div>
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deletProducts(item)  }/>
            {/* <Button type='submite'className='edit-button'>edit</Button> */}
            {/* <button className='hapus-button' onClick={() => deletProducts(item.id)  }>hapus</button> */}
        </div>
      </div>
      )
    })}
      </div>
    </div>
  )
}
