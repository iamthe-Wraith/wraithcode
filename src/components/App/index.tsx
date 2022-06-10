import React from 'react';
import { ThemeStore } from '../../contexts/theme-store';
import { GlobalStyles } from '../../styles/styles';
import { ThemeProvider } from '../ThemeProvider';

import { AppContainer } from './styles';

export const App: React.FC = () => (
  <ThemeStore>
    <ThemeProvider>
      <GlobalStyles />
      <AppContainer>
        temp App container
      </AppContainer>
    </ThemeProvider>
  </ThemeStore>
);
