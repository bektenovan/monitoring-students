import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from './AboutImage'


const aboutUs = () => {
    return (
        <>
            <Box  >
                <div width="100%" className='herow'>
                    <div className='image'>
                        <img width="100%" height="100%" src="https://static.boredpanda.com/blog/wp-content/uploads/2018/08/04-5b7fab626d092__880.jpg" alt="" />
                    </div>
                    <div className='content'>
                        <h1>Galaxy. Travel.</h1>
                        <p>World's first civilian space travel.</p>

                    </div>
                </div>
            </Box>

            <Box style={{ display: "flex", justifyContent: "center" }}>
                <AboutImage />
            </Box>
            <div className='signup'>
                <div className='container'>

                    <div className='right'>
                        <img width="500px" src="https://kabar.kg/site/assets/files/70855/33.jpg" alt='' />
                    </div>


                    <div className='left' >
                        <h2 className='text-dark'>Пришло время начать твое приключение.</h2>
                        <p className='text-dark'> Наша команда состоит из очень талантливых и мотивированных людей, и всем нам присуща одна черта — любовь к горам и путешествиям!

                            Мы все давно ходим в походы и очень много путешествуем.Посетите Кыргызстан летом или осенью, насладитесь его яркой природой и культурными мероприятиями. Посещение живописных мест, пикники, охота, отдых на берегу Иссык-куля – все это включают культурные туры в Кыргызстан.</p>
                        <div className='input-container'>
                            <Link to="/products">   <button className='btn-dark'>Подробнее</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
};

export default aboutUs;