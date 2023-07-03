
import Home from './page/home/Home'
import Profil from './page/profil/Profil'
import Produk from './page/produk/Produk'
import Kontak from './page/contact/Kontak'
import Login from './page/login/login'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componen/navbar/Navbar'
import Footer from './componen/footer/Footer'
import Mybarshow from './MybarShow/mybarshow'
import DasbordInput from './page/admin/DasbordAdmin/dasbordInput'
import Dasbord from './page/admin/DasbordAdmin/dasbord'
import DasbordEdit from './page/admin/DasbordAdmin/dasbordEdit'

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
        <Route path='/login'element={<Login/>}/>
        <Route path='/Dasbordinput'element={<DasbordInput/>}/>
        <Route path='/Dasbord'element={<Dasbord/>}/>
        {/* <Route path='/DasbordEdit/:id'element={<DasbordEdit/>}/> */}
      </Routes>
      <Mybarshow>
        <Footer/>
      </Mybarshow>
      
    </Router>
    </>
  
  )
}

export default App