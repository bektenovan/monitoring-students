import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavDropdown } from "react-bootstrap"
import { authContext } from '../context/authContext';


const Navbar = () => {
    const { currentUser, logOut } = useContext(authContext);
    // console.log(currentUser);

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>

            <Link to='/'><h1>GLX TRVL</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>НА ГЛАВНУЮ</Link>
                </li>
                <li>
                    <Link to='/pricing'>ТУРЫ И ПОХОДЫ</Link>
                </li>
                <li>
                    <Link to='/training'>О НАС</Link>
                </li>
                <li>
                    <Link to='/contact'>КОРЗИНА</Link>
                </li>

                <li>
                    <Nav>
                        <NavDropdown title="User Name">
                            {currentUser ? (
                                <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>) : null}
                            {currentUser ? (
                                <NavDropdown.Item onClick={() => { logOut() }}>LogOut</NavDropdown.Item>) : (<NavDropdown.Item > <Link to='/login'>LogIn</Link></NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                </li>

            </ul>


            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}

            </div>
        </div>
    )
}
export default Navbar;


