import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavDropdown } from "react-bootstrap"
import { authContext } from '../context/authContext';
import { cartContext } from '../context/cartContext';
import { Badge, IconButton } from '@mui/material';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";



const Navbar = () => {
    const { currentUser, logOut } = useContext(authContext);
    // console.log(currentUser);

    const { count, getCart } = React.useContext(cartContext);
    React.useEffect(() => {
        getCart();
    }, []);

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
                    <Link to='/products'>ТУРЫ И ПОХОДЫ</Link>
                </li>
                <li>
                    <Link to='/about-us'>О НАС</Link>
                </li>

                <Link to='/cart'>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit">
                        <Badge badgeContent={count} color="error">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton></Link>



                <Nav>
                    <NavDropdown title="User Name">
                        {currentUser ? (
                            <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>) : null}
                        {currentUser ? (
                            <NavDropdown.Item onClick={() => { logOut() }}>LogOut</NavDropdown.Item>) : (<NavDropdown.Item > <Link to='/login'>LogIn</Link></NavDropdown.Item>)}
                    </NavDropdown>
                </Nav>


            </ul>


            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}

            </div>
        </div>
    )
}
export default Navbar;


