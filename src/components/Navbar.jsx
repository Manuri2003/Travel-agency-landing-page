import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import hamburger from '../assets/images/hamburger.svg';
import chevron from '../assets/images/chevron-up.png';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">

            {/* Main Navbar */}
            <div className="h-16 w-full flex justify-between items-center px-6 lg:px-20">
                <div>
                    <img src={logo} alt="logo" className="h-7" />
                </div>
                <div className="text-sm hover:cursor-pointer hidden lg:flex flex-row gap-16 items-center">

                    <Link to="/destination" className="hover:text-orange-500">Destination</Link>
                    <Link to="/hotels" className="hover:text-orange-500">Hotels</Link>
                    <Link to="/flights" className="hover:text-orange-500">Flights</Link>
                    <Link to="/bookings" className="hover:text-orange-500">Bookings</Link>
                    <Link to="/login" className="hover:text-orange-500">Login</Link>

                    <button className="border-black border-2 rounded-md px-4 py-2 hover:text-white hover:bg-orange-500 hover:border-white">
                        Sign Up
                    </button>

                    <div className="flex gap-3 items-center">
                        <p className="hover:text-orange-500">EN</p>
                        <img src={chevron} alt="chevron-up" className="h-2" />
                    </div>

                </div>

                {/* Mobile Hamburger */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                    <img src={hamburger} alt="hamburger" className="h-8" />
                </button>

            </div>

            {/* Mobile Navigation */}

            {isOpen && (
                <div className="width-full right-6 top-16 mx-4 bg-white shadow-lg p-6 text-sm flex flex-col gap-6 items-center lg:hidden z-50">

                    <Link to="/destination" className="hover:text-orange-500">
                        Destination
                    </Link>

                    <Link to="/hotels" className="hover:text-orange-500">
                        Hotels
                    </Link>

                    <Link to="/flights" className="hover:text-orange-500">
                        Flights
                    </Link>

                    <Link to="/bookings" className="hover:text-orange-500">
                        Bookings
                    </Link>

                    <Link to="/login" className="hover:text-orange-500">
                        Login
                    </Link>

                    <button className="border-black border-2 rounded-md px-4 py-2  hover:text-white hover:bg-orange-500 hover:border-white">
                        Sign Up
                    </button>

                    <div className="flex gap-3 items-center">
                        <p className="hover:text-orange-500">EN</p>
                        <img src={chevron} alt="chevron-up" className="h-2" />
                    </div>

                </div>
            )}

        </div>
    );
}

export default Navbar;