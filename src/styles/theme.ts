import { createTheme } from '@mui/material/styles';
import { colors } from './variables';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.dark.primary,
        },
        secondary: {
            main: colors.dark.secondary,
        },
        text: {
            primary: colors.dark.text,
        },
        background: {
            default: colors.dark.background,
        },
    },
    typography: {
        allVariants: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colors.light.primary,
        },
        secondary: {
            main: colors.light.secondary,
        },
        text: {
            primary: colors.light.text,
        },
        background: {
            default: colors.light.background,
        },
    },
    typography: {
        allVariants: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
        },
    },
});
