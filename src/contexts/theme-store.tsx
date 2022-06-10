import React, {
  createContext, FC, useMemo, useState,
} from 'react';
import { ITheme } from '../styles/theme';

interface IProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext(null);

export const ThemeStore: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(null);

  const themeValue = useMemo(() => ({ setTheme, theme }), [setTheme, theme]);

  return (
    <ThemeContext.Provider value={ themeValue }>
      {children}
    </ThemeContext.Provider>
  );
};
