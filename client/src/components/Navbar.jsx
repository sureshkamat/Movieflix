import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="logo" />
                <div className="nav-links">
                    <Link to='/'> <Button variant="text" style={{ color: 'white' }}>Home</Button></Link>
                    <Link to='/movies'> <Button variant="text" style={{ color: 'white' }}>Movies</Button></Link>
                    <Link to='/series'> <Button variant="text" style={{ color: 'white' }}>Series</Button></Link>
                    <Link to='/series'> <Button variant="text" style={{ color: 'white' }}>Episodes</Button></Link>
                </div>
            </div>
            <div className='bar'>
                <input type='text' placeholder='Seach Movies'/>
            </div>
        </div>
    )
}

export default Navbar; // Change export statement to use default export
