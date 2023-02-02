import { styled, Switch } from '@mui/material';

export const CustomMuiSwitch = styled(Switch)(({ theme }) => ({
  width: 176,
  height: 42,
  backgroundColor: theme.palette.mode === 'dark' ? '#182157' : '#D1D6F6',
  borderRadius: 51,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    '&.Mui-checked': {
      transform: 'translateX(88px)',
      '& .MuiSwitch-thumb:before': {
        content: "'Dark'",
        fontSize: '0.875rem',
        letterSpacing: '0.15px',
        color: '#7C83AF',
        display: 'flex',
        alignItems: 'center',
        backgroundPosition: 'right',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          '#7C83AF'
        )}" d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#182157' : '#D1D6F6',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#313A75' : '#BBC2EE',
    width: 88,
    height: 42,
    boxShadow: 'none',
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 51,
    '&:before': {
      content: "'Light'",
      fontSize: '0.875rem',
      letterSpacing: '0.15px',
      display: 'flex',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'dark' ? '#182157' : '#D1D6F6',
    '&:before, &:after': {
      content: '""',
      fontSize: '0.875rem',
      letterSpacing: '0.15px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundRepeat: 'no-repeat',
    },
  },
}));
