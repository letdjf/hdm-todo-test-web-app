<<<<<<< HEAD
import TodoPage from './TodoPage';
=======
>>>>>>> patch-1
import { createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from '../config/router';
<<<<<<< HEAD
import { createWebtuneTheme } from '../config/theming';
=======
import { createWebtuneTheme } from '../config/theming.ts';
>>>>>>> patch-1
import { UiThemeContext } from './UiThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import 'dayjs/locale/fr'; // import locale

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

dayjs.locale('fr');

const App = () => {
  const [ localTheme, setLocalTheme ] = useState(createWebtuneTheme());
<<<<<<< HEAD
  const uiThemeContext = useMemo(() => ({
    theme: localTheme,
    setTheme: (mode: 'light' | 'dark') => setLocalTheme(createWebtuneTheme({
    palette: {
=======

  const uiThemeContext = useMemo(() => ({
    theme: localTheme,
    setTheme: (mode: 'light' | 'dark') => setLocalTheme(createTheme({
      palette: {
>>>>>>> patch-1
        mode,
      },
    })),
  }), [ localTheme ]);

  return (
    <UiThemeContext.Provider value={uiThemeContext}>
      <ThemeProvider theme={uiThemeContext.theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
          <ToastContainer />
<<<<<<< HEAD
          <TodoPage />
=======
>>>>>>> patch-1
        </LocalizationProvider>
      </ThemeProvider>
    </UiThemeContext.Provider>
  );
};

export default App;
