import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import ColorContext from './context/ColorContext';
import router from './routes/router';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

function AppWrapper() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  return (
    <React.StrictMode>
      <ColorContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorContext.Provider>
    </React.StrictMode>
  );
}

export default AppWrapper;
