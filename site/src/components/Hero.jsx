import React from 'react';
import background from '../images/heroBg.jpg'



export default function Hero() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
                <div className="herobg " >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hero-text">
                                    <h6>FITNESS ELEMENTS</h6>
                                    <h1>BMI CALCULATOR</h1>
                                    <p>
                                        Gutim comes packed with the user-friendly BMI Calculator
                                        <br /> shortcode which lets
                                    </p>
                                    <a href="#" className="primary-btn mb-2">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

