import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" sx={{ gap: { sm: '100px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px', margin: '20px 20px'}} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      justifyContent="space-around"
    >
      <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #e91c4c', marginBottom: '60px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', marginBottom: '60px' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
