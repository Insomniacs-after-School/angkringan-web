import {React,useState} from 'react'
import { MenuAdmin} from './navAdminMEnu'
import '../../../componen/navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../../componen/button/Button'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
    setClicked(!clicked);
    };
    return (
    <nav className='NavbarItem'>
        <h1 className='nav-logo'>Pojok <span>Bambu</span></h1>
        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <div >
                <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                    {MenuAdmin.map((item,index)=>{
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                <Button className='nav-button'>
                    <Link className="nav-button"to={"/login"}>log out</Link>
                    </Button>
                </ul>
            </div>
    </nav>
    )
}

export default NavbarAdmin