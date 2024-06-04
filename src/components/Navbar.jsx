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
    React.useEffect(() => {

    }, []);



    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= -1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header header-grey'}>

            <Link to='/'><img src="https://kstu.kg/fileadmin/main_menu/enrollee/logo_kgtu_.png" alt="" width={90} />  </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>На главную</Link>
                </li>
                <li>
                    <Link to='/post-resume'>Заполнить резюме</Link>
                </li>
                <li>
                    <Link to="/resumes">Резюме студента</Link>
                </li>
                <li>
                    <Link to='/survey-page'>Пройти опрос</Link>
                </li>
                <li>
                    <Link to='/surveyData'>
                        Данные опроса

                    </Link>
                </li>


                <li>   <Link to="/post-job">
                    Вакансии
                </Link></li>


                <Nav>
                    <NavDropdown title="User Name" >
                        {currentUser ? (
                            <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>) : null}
                        {currentUser ? (
                            <NavDropdown.Item onClick={() => { logOut() }} style={{ color: "black" }}>LogOut</NavDropdown.Item>) : (<NavDropdown.Item > <Link to='/login' style={{ color: "black" }}>LogIn</Link></NavDropdown.Item>)}
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


