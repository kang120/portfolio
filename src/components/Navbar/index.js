import { useLocation } from 'react-router-dom';
import picture from '../../asset/image/me5.png';
import { useEffect, useState } from 'react';
import logo from "../../asset/image/logo.png"

const Navbar = () => {
    const location = useLocation();

    const [pathname, setPathname] = useState(null);

    useEffect(() => {
        setPathname(location.pathname)
    }, [location])

    return (
        <div className="w-full fixed top-0 left-0 bg-white z-50">
            <div className='w-full 2xl:px-64 xl:px-36 lg:px-20 px-3 py-3'>
                <div className='w-full flex items-center'>
                    <img src={logo} className='h-6' />

                    <div className="ms-auto flex items-center">
                        <div>Home</div>
                        <div className='ms-4'>Highlight</div>
                        <div className='ms-16'>En</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
