
import Home from './page/home/Home'
import Profil from './page/profil/Profil'
import Produk from './page/produk/Produk'
import Kontak from './page/contact/Kontak'
import Login from './page/login/login'
import Registrasi from './page/register/register'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componen/navbar/Navbar'
import Footer from './componen/footer/Footer'
import Mybarshow from './MybarShow/mybarshow'
import DasbordInput from './page/admin/DasbordAdmin/dasbordInput'
import Dashboard from './page/admin/DasbordAdmin/dasbord'
// import  Procuts from './page/admin/components/dsproduct/product'
import DasbordEdit from './page/admin/DasbordAdmin/dasbordedit'

const App = () => {
  return (
    <>
    <Router>
      <Mybarshow>
        <Navbar/>
      </Mybarshow>
      
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Profil'element={<Profil/>}/>
        <Route path='/produk'element={<Produk/>}/>
        <Route path='/kontak'element={<Kontak/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Registrasi'element={<Registrasi/>}/>
        <Route path='/Dasbordinput'element={<DasbordInput/>}/>
        <Route path='/Dashboard'element={<Dashboard/>}/>
        {/* <Route path='/Procuts'element={<Procuts/>}/> */}
        <Route path='/Dashboard/DasbordEdit/:id'element={<DasbordEdit/>}/>
      </Routes>
      <Mybarshow>
        <Footer/>
      </Mybarshow>
      
    </Router>
    </>
  
  )
}

export default App