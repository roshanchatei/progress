import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        accent: {
            main: '#F9F9F9',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
