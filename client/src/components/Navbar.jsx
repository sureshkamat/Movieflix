
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSearchContext } from '../pages/SearchContext';



const Navbar = () => {
  const { setSearchQuery } = useSearchContext();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='navbar'>
      <div className="nav">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="logo" />
        <div className="nav-links">
          <Link to='/'> <Button variant="text" style={{ color: 'white' }}>Home</Button></Link>
          <Link to='/search'> <Button variant="text" style={{ color: 'white' }} onClick={() => setSearchQuery('Movies')}>Movies</Button></Link>
          <Link to='/search'> <Button variant="text" style={{ color: 'white' }} onClick={() => setSearchQuery('Series')}>Series</Button></Link>
          <Link to='/search'> <Button variant="text" style={{ color: 'white' }} onClick={() => setSearchQuery('Episodes')}>Episodes</Button></Link>
        </div>
      </div>
      <div className='bar'>
       <Link to='/search'> <input type='text' placeholder='Search Movies' onChange={handleSearch} className='searchinput'/></Link>
      </div>
      
    </div>
  );
};

export default Navbar;
