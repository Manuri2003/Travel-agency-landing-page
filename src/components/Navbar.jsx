import React from 'react';
function Navbar() {
    return (
        <div className="h-16 w-full flex justify-between items-center px-20">
            <div>
                <h1>Jadoo</h1>
            </div>
            
            <div className="text-sm hover:cursor-pointer flex gap-16 items-center">
                <span className="hover:text-orange-500">Destination</span>
                <span className="hover:text-orange-500">Hotels</span>
                <span className="hover:text-orange-500">Flights</span>
                <span className="hover:text-orange-500">Bookings</span>  
                <span className="hover:text-orange-500">Login</span>
                <button className="border-black border-2 rounded-md px-4 py-2">Sign Up</button>
                <span className="hover:text-orange-500">EN </span> 
            </div>
        </div>
    )
}
    
export default Navbar;