import * as React from 'react';
import { useState } from 'react';

import { Slider, IconButton, Popover, Stack, Box, Avatar } from '@mui/material';

import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';

export const Controls = () => {
  const [volume, setVolume] = useState<number>(100);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (event: Event, newVolume: number | number[]) => {
    setVolume(newVolume as number);
  };

  const showVolumeIcon = React.useCallback(() => {
    if (volume === 0) {
      return <VolumeOffOutlinedIcon />;
    } else if (volume > 50) {
      return <VolumeUpOutlinedIcon />;
    } else {
      return <VolumeDownOutlinedIcon />;
    }
  }, [volume]);

  return (
    <Box>
      <Box>
        <IconButton sx={{ mr: 5, p: 0 }} color="secondary" component="label">
          <RepeatIcon />
        </IconButton>
        <IconButton sx={{ mr: 5, p: 0 }} color="secondary" component="label">
          <ShuffleIcon />
        </IconButton>
        <IconButton sx={{ p: 0 }} color="secondary" component="label">
          <SkipPreviousOutlinedIcon />
        </IconButton>

        <IconButton
          color="secondary"
          component="label"
          sx={{ marginLeft: 3.5, marginRight: 3.5, p: 0 }}
        >
          <Avatar sx={{ backgroundColor: '#6371C9', width: 48, height: 48 }}>
            <PlayArrowOutlinedIcon style={{ color: '#FFFFFF' }} />
          </Avatar>
        </IconButton>

        <IconButton sx={{ p: 0 }} color="secondary" component="label">
          <SkipNextOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ml: 5, p: 0 }} color="secondary" component="label">
          <QueueMusicOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ ml: 5, p: 0 }}
          color="secondary"
          component="label"
          onClick={handleClick}
        >
          {showVolumeIcon()}
        </IconButton>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDownOutlinedIcon />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleChange}
            />
            <VolumeUpOutlinedIcon />
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};
