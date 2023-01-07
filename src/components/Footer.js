import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="40px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="5px" textAlign="center" pb="20px">&copy; Maramoo Productions 2022</Typography>
  </Box>
);

export default Footer;