import React from 'react'
import { Link } from 'react-router-dom'

import natureVideo from "../files/nature.mp4"


const Video = () => {
    return (

        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={natureVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>Открой для себя красоту Кыргызстана</p>
                <div>
                    <Link to='/training' className='btn'>Зарегистрироваться</Link>
                    <Link to='/contact' className='btn btn-light'>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default Video