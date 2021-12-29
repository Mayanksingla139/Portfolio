import React from "react";
import "./index.css";
import home from "../src/Image/Home.jpg";
import {NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faGithub, faInstagram, faLinkedin,} from '@fortawesome/free-brands-svg-icons';

const Home = () =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 max-auto">
                            <div className="row">
                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column info">
                                    <h1>Hey there!</h1>
                                    <h2 className="my-3">I am <strong className="brandName">Mayank Singla</strong></h2>
                                    <p className="my-3 mx-3">
                                        <a className="mx-3" href="https://www.linkedin.com/in/mayank-singla-2659341b7/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                                        <a className="mx-3" href="https://github.com/Mayanksingla139"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                        <a className="mx-3" href="https://twitter.com/Mayank_Singla13"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                                        <a className="mx-3" href="https://www.instagram.com/the.mayank_singla/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                                    </p>
                                    <p className="my-2">Web developer | Android developer</p>
                                    <div className="mt-3">
                                        <NavLink type="button" className="btn btn-primary rounded-pill" to="Service">Get Started</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-3 order-1 order-lg-2 header-img">
                                    <img src={home} className="img-fluid animated" alt="home.png"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home