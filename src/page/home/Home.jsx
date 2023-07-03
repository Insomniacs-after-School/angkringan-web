import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './home.css'
import esteh from'../../componen/img/esteh.jpg'
import sunduk from '../../componen/img/sundukan.jpg'
import makanan from '../../componen/img/makanan.jpg'
import wahana from '../../componen/img/bermain.png'
import jajanan from '../../componen/img/jajanan.jpg'
import gorengan from '../../componen/img/gorengan.png'
import geo from '../../componen/img/Picture2.jpg'
import { Button } from '../../componen/button/Button'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faHouse, faPerson, faWifi, } from '@fortawesome/free-solid-svg-icons'

import MenuCategory from "../../componen/menu/Menu.jsx"
const Home = () => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='home'>
      <div className='app'>
        <div className='app-text'>
          <h1>ANGKRINGAN <li></li><span>POJOK BAMBU</span> </h1>
          <p>Rajanya nasi bungkus <li></li><span>2000-An</span></p> 
          <Button className='app-button'>Lokasi</Button>
        </div>
      </div>


      {/* Menu */}
      <div className='menu'>
        <h3 className='menu-title'>categori</h3>
        <h1 className='menu-desc'>Beberapa Categori Menu</h1>
        <div className='card'>
        <MenuCategory src={sunduk} alt='sundukan' Text='Sundukan'/>
        <MenuCategory src={esteh} alt='Minuman' Text='Minuman'/>
        <MenuCategory src={makanan} alt='Nasi Bungkus' Text='Nasi Bungkus' />
        <MenuCategory src={jajanan} alt='jajanan pasar' Text='Jajanan Pasar'/>
        <MenuCategory src={gorengan} alt='gorengan' Text='Gorengan' />
        </div>
      </div>
      {/* Batas Menu */}


      {/* letak georafis */}
      <div className='geografis'>
        <h3>Wilayah</h3>
        <h1>Menggambarkan Wilayah Geografis Desa </h1>
        <div className='img-geo'>
          <img src={geo} alt="s" />
          <p>Berdasarkan aspek geografis, desa Cangkol memiliki lokasi yang sangat potensial dan dilewati moda transportasi antar kota. Desa Cangkol merupakan penghubung antara Kabupaten Sukoharjo, Kabupaten Karanganyar dan Kota Surakarta. Desa Cangkol termasuk dalam Bagian Wilayah Kecamatan I (BWK I) yang berfungsi sebagai kawasan Permukiman, Pertanian, Industri Batik,  Perdagangan dan Jasa. </p>
        </div>
          
      </div>

      {/* batas letas */}
      {/* fasilitas */}
      <div className='fasil'>
        <h3 className='fasil-title'>fasilitas</h3>
        <h1 className='fasil-desc'>Beberapa Macam Fasilitas</h1>
        <div className='fasil-card'>
          <div className='fasil-box'>
            <FontAwesomeIcon icon={faWifi} className='fasil-wifi'/>
            <h1>Wifi</h1>
            <p>Untuk mempermudah sumper internet disediakan fasilitas umum berupa wifi koin yang bisa digunakan </p>
            </div>
            <div className='fasil-box'>
            <FontAwesomeIcon icon={faPerson}className='fasil-orang' />
            <h1>Tempat Duduk</h1>
            <p>demi kenyamanan Tempat duduk dua opsi yang di sediakan ada mau lesehan dan dikursi
              </p>
            </div>
            <div className='fasil-box'>
            <FontAwesomeIcon icon={faBus} className='fasil-icon'/>
            <h1>Bus</h1>
            <p> Untuk menuju ke angkringan dari solo / terminal tertonadi dapat mengunakan bus BST </p>
            </div>
            <div className='fasil-box'>
            <img src={wahana} alt="wahana" className='fasil-img' />
            <h1>Wahana Bermain</h1>
            <p>Wahana yang bisa di gunakan untuk menghilangkan bosen pada anak, Wahana ini ada di setiap malam ada kecuali kalau hujan.</p>
            </div>
            <div className='fasil-box'>
            <FontAwesomeIcon icon={faHouse} className='fasil-icon'/>
            <h1>Rum Ibadah</h1>
            <p> Angkringan pojok bambu deket dengan dua rumah ibadah yaitu  masjid dan gereja yang letaknya tidak jauh.</p>
            </div>
        </div>
      </div>


      {/* slid */}
      <div className='slid-contain'>
            <h2 className='slid-title'> Single Item</h2>
            <Slider {...settings}>
                <div className='box'>
                    <h3>1</h3>
                </div>
                <div className='box'>
                    <h3>2</h3>
                </div>
                <div className='box'>
                    <h3>3</h3>
                </div>
                <div className='box'>
                    <h3>4</h3>
                </div>
                <div className='box'>
                    <h3>5</h3>
                </div>
                <div className='box'>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
    </div>
  )
}

export default Home