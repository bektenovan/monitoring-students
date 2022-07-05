import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p>123 ул. Фрунзе</p>
                            <h4>Бишкек</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} /> 0999945678</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} /> trips@galaxy.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>О нас</h4>
                    <p>"Наша команда состоит из очень талантливых и мотивированных людей, и всем нам присуща одна черта — любовь к горам и путешествиям! "</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer