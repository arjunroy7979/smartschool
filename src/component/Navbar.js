import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-expand-lg bg-light shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">SMART SCHOOL</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav my-sm-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Location</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar