import { React,useEffect,useState } from 'react'
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import axios from 'axios'
import { Button } from "../../../componen/button/Button";
import { useNavigate ,Link} from "react-router-dom";
//import jwtDecode from "jwt-decode";
const Dasbord = ()=>{


    // const [name, setName]= useState('')
    // const [accessToken, setaccessToken]= useState('')

    // useEffect(()=>{
    //     refreshToken()
    // },[])
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`
    //         }
    //     };
    // const refreshToken = async()=>{
    //     try {
    //         const response = await axios.get("http://localhost:5000/token");
    //         console.log(response)
    //         const decocded = jwtDecode(response.data.data.accessToken)
    //         // console.log(decocded)
    //         setaccessToken(response.data.data.token);
    //         setName(decocded.name)
    //     } catch (error) {
    //         console.error('Error refreshing token:', error);
    //     }
    // }
    const [products, setPoroducts]= useState([])
    const [masukan, setMasukan]= useState([])
    // const [notification, setNotification] = useState('');
    const navigatet= useNavigate()

    useEffect(()=>{
        getProducts()
        getMasukan()
        // getUser()
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
    // const getUser = async()=>{
    //     try {
    //         const accessToken = localStorage.getItem('Token');
    //         console.log(accessToken)
    //     const products = await axios.get("http://localhost:5000/user",{
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`
    //           }
    //     });
    //     console.log(products.data.data)
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // }
    const deletProducts  = async(id)=>{
        if (window.confirm('Anda yakin ingin menghapus produk ini?')) {
            await axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => {
                // setNotification('Produk berhasil dihapus.');
                getProducts();
                navigatet("/Dashboard")
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
            
            {/* <h1>welcome : {name}</h1> */}
            {/* /*<button onClick={refreshToken}>Refresh Token</button> */}
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
                                    <Link to={`DasbordEdit/${item.id}`} className='edit-button'>edit</Link>
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