import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar'

import Dropdn from './Dropdn'

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link style={{marginTop:"1px"}} to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i> <img src="triplogo.jpg" alt="tripnxt-logor" width={50} height={50} /><b>tripnxt</b></i>
          </Link>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* <li style={{marginTop: '20px'}}>
          <LocalizationProvider dateAdapter={DateFnsAdapter}>...</LocalizationProvider>
            </li> */}
            
          <li style={{marginTop: '20px'}}>
              <Dropdn filterByCategory={props.filterOnCategory} 
               filterByLocation={props.filterOnLocation}
                items={['Adrenaline', 'Adventure', 'Mystery', 'Luxury','Peace']} 
                places={['Bali','Atalanta','Himalaya','Rajgir','Sahara','Amazon']}/>
              
            </li>
            
            <li style={{marginTop: '20px'}}>
              <Searchbar searchKey={props.searchByKey}/>
            </li>
            
            
            
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               About
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button  && <Button  buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
