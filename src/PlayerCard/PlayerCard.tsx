import { useState } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Typography, Slider, IconButton, Box } from '@mui/material';

import {
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
  ThumbDown,
} from '@mui/icons-material';

import { AlbumImage } from './styles';
import { Controls } from './Controls/Controls';
import { lightTheme, darkTheme } from '../styles/theme';
import { CustomMuiSwitch } from './Controls/CustomMuiSwitch';

const PlayerCard = () => {
  const duration = 245;
  const [position, setPosition] = useState(20);
  const [checked, setChecked] = useState(false);
  const [mode, setMode] = useState('light');
  const [isLiked, setLiked] = useState<boolean | null>(null);
  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const switchHandler = (e) => {
    setChecked(e.target.checked);
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: 1280,
          height: 720,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomMuiSwitch checked={checked} onChange={switchHandler} />

        <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg" />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            sx={{ p: 0 }}
            color="secondary"
            component="label"
            onClick={() => {
              setLiked(isLiked === false ? null : false);
            }}
          >
            {isLiked === false ? <ThumbDown /> : <ThumbDownOffAlt />}
          </IconButton>

          <Typography
            sx={{
              marginBottom: 1,
              marginLeft: 5,
              marginRight: 5,
              fontSize: '1.25rem',
            }}
            color="secondary"
            variant="h6"
            component="h5"
          >
            Maniac
          </Typography>

          <IconButton
            sx={{ p: 0 }}
            color="secondary"
            component="label"
            onClick={() => {
              setLiked(isLiked ? null : true);
            }}
          >
            {isLiked === true ? <ThumbUp /> : <ThumbUpOffAlt />}
          </IconButton>
        </Box>

        <Typography variant="caption" fontSize={'1rem'} component="span">
          Michael Sambello
        </Typography>

        <Slider
          sx={{
            width: 408,
            height: 4,
            marginBottom: 5,
            marginTop: 2,
            paddingTop: 2.5,
            paddingBottom: 2.5,
            '& .MuiSlider-markLabel': {
              color: 'secondary.main',
              marginTop: '10px',
            },
            '& .MuiSlider-markLabel[data-index="0"]': {
              transform: 'translateX(0%)',
            },
            '& .MuiSlider-markLabel[data-index="1"]': {
              transform: 'translateX(-100%)',
            },
          }}
          aria-label="Custom marks"
          value={position}
          valueLabelDisplay="auto"
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value as number)}
          marks={[
            {
              value: 0,
              label: formatDuration(position),
            },
            {
              value: duration,
              label: formatDuration(duration),
            },
          ]}
        />
        <Controls />
      </Box>
    </ThemeProvider>
  );
};

export default PlayerCard;
