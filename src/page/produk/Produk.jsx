
import { useEffect,useState } from 'react'
// import Nasi from '../../componen/img/makanan.jpg'
import './produk.css'
import axios from 'axios'


const Produk =()=>{
    const [products, setPoroducts]= useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async()=>{
        const products = await axios.get("http://localhost:5000/products");
        console.log(products.data.data)
        setPoroducts(products.data.data)
    }
    return(
        <div className="Produk-row">
            {
            products.map((item,index)=>{
                console.log(`http://localhost:5000/${item.foto}`)
                return(
                <div className="produk-card" key={index.id}>
                    
                <img src={`http://localhost:5000/foto/${item.foto}`} alt={item.name}/>
                <h3>{item.name}</h3>
                <h4>{item.harga}</h4>
            </div>
                )})
                }
            
            {/* <div className="produk-card">
                <img src={Nasi} alt="nasi" />
                <h3>Nama</h3>
                <h4>Harga</h4>
            </div>
            <div className="produk-card">
                <img src={Nasi} alt="nasi" />
                <h3>Nama</h3>
                <h4>Harga</h4>
            </div>
            <div className="produk-card">
                <img src={Nasi} alt="nasi" />
                <h3>Nama</h3>
                <h4>Harga</h4>
            </div>
            <div className="produk-card">
                <img src={Nasi} alt="nasi" />
                <h3>Nama</h3>
                <h4>Harga</h4>
            </div>
            <div className="produk-card">
                <img src={Nasi} alt="nasi" />
                <h3>Nama</h3>
                <h4>Harga</h4>
            </div> */}
        </div>
    )
}
export default Produk