import React from 'react';
import image from "../files/2.jpg"
import image2 from '../files/1.jpg'


const HomePage = () => {
    return (
        <div >
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 style={{ color: "green" }} className="section-heading ">Services</h2>
                            <h3 className="section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='https://thumbs.dreamstime.com/b/vector-bus-icon-isolated-white-background-bus-icon-109464300.jpg'></img>
                            <h4 className="service-heading">E-Commerce</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='https://t4.ftcdn.net/jpg/03/11/37/85/360_F_311378533_IlrmP1r5yOhD4yMDSuAnr49tcC7mUVQd.jpg
'></img>

                            <h4 className="service-heading">Responsive Design</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='data:image/png;base64,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'></img>

                            <h4 className="service-heading">Web Security</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----- */}

            <div className='signup'>
                <div className='container'>
                 
                    <div className='right'>
                        <img width="500px" src={image} alt='' />
                    </div>

                  
                    <div className='left' >
                        <h2 className='text-dark'>Earn passive income with crypto.</h2>
                        <p className='text-dark'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                        <div className='input-container'>
                            <button className='btn-dark'>Learn More</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='signup' >
                <div className='container'>
               
                    <div className='right' >
                        <img width="500px" src={image2} alt='' />
                    </div>

                    
                    <div className='left'>
                        <h2 className='text-dark'>Earn passive income with crypto.</h2>
                        <p className='text-dark'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                        <div className='input-container'>
                            <button className='btn-dark'>Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HomePage;