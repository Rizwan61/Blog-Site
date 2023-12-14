


import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bgcolor">
            <div className="container">
                <a className="navbar-brand" href="#">
                   <span> Gu<span style={{color:"#f67831"}}>tim.</span></span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mx-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Classes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacts
                            </a>
                        </li>


                    </ul>

                    <div class="on-light">
                        <button class="border-gradient border-gradient-purple nav-button">
                            Sign Up Today
                        </button>
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Navbar