import * as React from 'react';
import './style.css';
import PlayerCard from './PlayerCard/PlayerCard';
import { Box } from '@mui/material';

export default function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PlayerCard />
    </Box>
  );
}
