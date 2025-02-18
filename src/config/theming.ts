import { createTheme } from '@mui/material';

export const colors = {
  primary: {
    main: '#00001D',
  },
  secondary: {
    main: '#F9BD0C',
  },
  tertiary: {
    main: '#fff',
  },
  text: {
    primary: '#00001D',
  },
};

<<<<<<< HEAD
export const createWebtuneTheme = (p0: { palette: { mode: "light" | "dark"; }; }) => createTheme({
=======
export const createWebtuneTheme = () => createTheme({
>>>>>>> patch-1
  palette: {
    primary: {
      ...colors.primary,
    },
    secondary: {
      ...colors.secondary,
    },
    text: {
      ...colors.text,
    },
    info: {
      main: '#4bdde2',
    },
  },
});
