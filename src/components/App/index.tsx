import React from 'react';
import { ThemeStore } from '../../contexts/theme-store';
import { GlobalStyles } from '../../styles/styles';
import { ComingSoon } from '../ComingSoon';
import { MainRouter } from '../MainRouter';
import { ThemeProvider } from '../ThemeProvider';

export const App: React.FC = () => (
  <ThemeStore>
    <ThemeProvider>
      <GlobalStyles />
      <MainRouter />
    </ThemeProvider>
  </ThemeStore>
);
