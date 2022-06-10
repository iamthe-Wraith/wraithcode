import React from 'react';
import { ThemeStore } from '../../contexts/theme-store';
import { GlobalStyles } from '../../styles/styles';
import { ComingSoon } from '../ComingSoon';
import { ThemeProvider } from '../ThemeProvider';

export const App: React.FC = () => (
  <ThemeStore>
    <ThemeProvider>
      <GlobalStyles />
      <ComingSoon />
    </ThemeProvider>
  </ThemeStore>
);
