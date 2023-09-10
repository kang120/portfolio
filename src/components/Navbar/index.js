import { useLocation } from 'react-router-dom';
import picture from '../../asset/img/me.jpeg';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const location = useLocation();

    const [pathname, setPathname] = useState(null);

    useEffect(() => {
        setPathname(location.pathname)
    }, [location])

    return (
        <div className='nav-container'>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container-fluid responsive-flex-column">

                    <a class="navbar-brand">Lee Wei Kang</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse flex-column" id="collapse1">
                        <img src={picture} className='nav-pic mt-3' />
                        <p className='text-light mt-3'><small>Hi, I am Wei Kang, a people who enjoys programming and passionate in software development</small></p>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <a className="icon" href="https://www.linkedin.com/in/weikang120/" target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a className="icon ms-3" href="https://github.com/kang120" target="_blank">
                                <i class="bi bi-github"></i>
                            </a>
                            <a className="icon ms-3" href="mailto:<leeweikang1220@gmail.com>">
                                <i class="bi bi-envelope-fill"></i>
                            </a>
                            <a className="icon ms-3" href="https://www.facebook.com/xiaokang120/" target="_blank">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>

                        <ul class="navbar-nav flex-column mt-5">
                            <li class="nav-item">
                                <a class={`nav-link ${(pathname == '/about' || pathname == '/') ? 'active' : ''}`} href="about">About Me
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link ${pathname == '/experience' ? 'active' : ''}`} href="experience">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link ${pathname == '/award' ? 'active' : ''}`} href="award">Awards</a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link ${pathname == '/resume' ? 'active' : ''}`} href="resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
