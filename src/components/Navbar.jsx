import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <div className="h-16 w-full flex justify-between items-center px-20">
            <div>
                <img src={logo} alt="logo" className="h-7"/>
            </div>
            
            <div className="text-sm hover:cursor-pointer flex gap-16 items-center">
                <Link to="/destination" className="hover:text-orange-500">Destination</Link>
                <Link to="/hotels" className="hover:text-orange-500">Hotels</Link>
                <Link to="/flights" className="hover:text-orange-500">Flights</Link>
                <Link to="/bookings" className="hover:text-orange-500">Bookings</Link>
                <Link to="/login" className="hover:text-orange-500">Login</Link>
                <button className="border-black border-2 rounded-md px-4 py-2">Sign Up</button>
                <div className="flex gap-2 items-center">
                    <p className="text-sm hover:text-orange-500">EN</p>
                    <img src="src\assets\images\chevron-up.png" alt="chevron up"/>
                </div>
            </div>
        </div>
    )
}
    
export default Navbar;