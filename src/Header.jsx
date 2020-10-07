import React from 'react';
import logo from './images/logo.jpg'


const Header=()=>{
  return (
  <>
  <div className="header">
      <img src={logo} alt='logo' width='70px' height='60px'/>
      <h1> Google Keep Clone</h1>
  </div>
  </>)
}
export default Header;