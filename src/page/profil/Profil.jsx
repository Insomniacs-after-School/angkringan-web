
import lokasi from  '../../componen/img/esteh.jpg'
import './profil.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const Profil = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className='app-profil'>
      <div className='title-pro'>
        <h1>Profil Pojok Bambu</h1>
      </div>
        <div className='profil'>
          <h1>Profil</h1>
            <p>Angkringan “Pojok Bambu” merupakan bentuk usaha  yang bergerak di dunia perkulineran nasi bungkus 2000an. Disamping itu Angkringan “Pojok Bambu” juga menjadi suplier makanan ke beberapa usaha yang sama. Usaha ini didirikan pada tahun 2014 oleh Bapak Hananto, Winarno, dan Budiarso yang secara bersama mengelola sekaligus ownernya. </p>
        </div>
        <div className='asal-usul'>
          <h1>Asal Usul</h1>
            <p>Asal mula usaha ini merupakan pemberdayaan warga Desa Cangkol yang tidak/belum mampu menyewa tempat yang disediakan oleh Pemerintah Desa Cangkol. Angkringan “Pojok Bambu” merupakan salah satu Sub Unit dari Wisata Kuliner Desa Cangkol dibawah binaan Badan Usaha Milik Desa (BUMDes) Desa Cangkol yang bertujuan menggelola produk dari warga dengan menyediakan tempat dan pengelola dengan sistem titip laku bayar.</p>
        </div>
        <div className="vimi">
          <h1 className='vimi-title'>Visi&Misi</h1>
          <div className="vimi-cont">
            <h3>Visi</h3>
            <p>Visi dari Angkringan “Pojok Bambu” adalah Bersama Mensejahterakan Usaha Kecil dan Menengah warga disekitar Tempat Usaha.</p>
            <h3>Misi</h3>
            <p>a.  Membangun dan mengembangkan potensi diri dalam mengembangkan suatu usaha angkringan sebagai ciri khas potensi desa wisata.</p>
            <p>b.	 Menyediakan fasilitas dan mengembangkan menu angkringan dengan berbagai menu yang berbeda dengan angkringan yang biasa dan diharapkan banyak disukai oleh semua elemen masyarakat. </p>
            <p>c.	 Memberdayakan masyarakat dengan memberikan kesempatan serta dukungan kepada seluruh elemen masyarakat supaya mendapatkan lapangan pekerjaan.</p>         
          </div>
        </div>
        {/* slid */}
      <div className='profile-slid'>
            <h2 className='profil-slid-title'> Single Item</h2>
            <Slider {...settings}>
                <div className='profil-box'>
                  <img src={lokasi} alt="" />
                    <h3>Lokasi</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus sapiente vitae consequuntur amet minus rem obcaecati nemo qui autem, molestias maiores sint quis. Dolore molestias velit eum doloremque sunt.</p>
                </div>
                <div className='profil-box'>
                    <h3>2</h3>
                </div>
                <div className='profil-box'>
                    <h3>3</h3>
                </div>
                </Slider>
            </div>
    </div>
  )
}

export default Profil