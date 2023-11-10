import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='text-xl'>Amazon</h1>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-4'>
                        <li>
                            <Link className='text-xl' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-xl' to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className='text-xl' to="/dashboard">Dashboard</Link>
                        </li>
                        
                        
                    </ul>
                </nav>
            </div>
            
        </div>
    );
};

export default Navbar;