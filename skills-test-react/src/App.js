import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccountMenu from './AccountMenu';

export default function App() {

  return (
    <Container maxWidth='sm'>
      <AccountMenu  />
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
}
