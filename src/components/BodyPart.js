import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/body.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #e91c4c', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '100px', height: '100px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;