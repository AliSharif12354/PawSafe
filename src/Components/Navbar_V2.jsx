import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar_V2.css'
import { auth } from '../Firebase';
import { Navbar } from 'react-bootstrap';

function Navbar_V2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleSignOut = (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      console.log("Hey there, ", auth.currentUser)
    }
    // else {
    //   console.log("No one is signed in right now")
    // }
    auth.signOut()
      .then(() => {
        console.log("Signed out!");
      })
      .catch((error) => {
        console.log("Error")
        console.log(error);
      });
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <Navbar sticky='top' className='navbar navbar-fixed-top'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SilentPaws
            {/* <i className="fa-solid fa-person-walking-luggage fa-shake"></i> */}
            <img src="/Images/150-150-white.png" style={{width: '100px', height: '100px', marginTop: '20px'}} alt="Silent Paws Logo" />
          </Link>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          {auth.currentUser ? (
            <div className="logout">
              <button onClick={handleSignOut}>LogOut</button>
            </div>
          ) : (
            ""
          )}
          {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {auth.currentUser ? (
              <li id='0' className='nav-item'>
                <Link to='/adminRoute' className='nav-links' onClick={closeMobileMenu}>
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
            <li id='1' className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {!auth.currentUser ? ( //if not signed in show sign in, if signed in hide.
              <li className='nav-item'>
                <Link
                  to='/signinadmin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sign in
                </Link>
              </li>
            ) : (
              ""
            )}
            <li id='2' className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul> */}
          <div style={{marginLeft: '5%'}} className="nav-socials">
            {/* <SocialIcon url="https://www.instagram.com/zamzam_bag_boutique/?hl=en" target="_blank" /> */}
            <a target='_blank' href="https://amzn.to/3QAbAmC"><i style={{scale: '250%'}} className="fab fa-amazon"></i></a>
          </div>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </Navbar>
    </>
  );
}

export default Navbar_V2;