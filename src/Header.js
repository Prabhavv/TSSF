import React from 'react';
import logo from './SSF_Signature_Colour.png'; // Make sure this file is in the src folder

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', padding: '20px 40px', borderBottom: '2px solid #bd5185' }}>
  <img src={logo} alt="SSF Logo" style={{ width: '225px' }} />
</header>
    );
  };

export default Header;