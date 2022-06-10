import React, { FC, ReactNode, useMemo } from 'react';
import { ThemeProvider as StylesThemeProvider } from 'styled-components';
import { AuroraBorealis, Breeze, DangerousIce, PinkBerry, PlumpCandy, PoisonIvy, Themes, Villain } from '../../styles/theme';

interface IProps {
  children: ReactNode;
}

export const ThemeProvider: FC<IProps> = ({ children }) => {
  // TODO: update to support dynamic setting
  const themeSetting: Themes = window.localStorage.getItem('theme') as Themes;

  const theme = useMemo(() => {
    switch (themeSetting) {
      case Themes.AuroraBorealis: return AuroraBorealis;
      case Themes.Breeze: return Breeze;
      case Themes.DangerousIce: return DangerousIce;
      case Themes.PinkBerry: return PinkBerry;
      case Themes.PlumpCandy: return PlumpCandy;
      case Themes.Villain: return Villain;
      default: return PoisonIvy;
    }
  }, [themeSetting]);

  return (
    <StylesThemeProvider theme={ theme }>
      { children }
    </StylesThemeProvider>
  )
};
