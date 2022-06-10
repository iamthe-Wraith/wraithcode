export interface IColors {
  gray1: string; // dark
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string; // light
  highlight1: string,
  highlight2: string,
  primary: string,
  primaryDark: string,
  primaryLight: string,
}

export interface ITheme {
  colors: IColors;
}

export enum Themes {
  Breeze = 'Breeze',
  PinkBerry = 'PinkBerry',
  PoisonIvy = 'PoisonIvy',
  DangerousIce = 'DangerousIce',
  PlumpCandy = 'PlumpCandy',
  Villain = 'Villain',
  AuroraBorealis = 'AuroraBorealis',
}

/**
 * ONLY USE HEX VALUES AND ALWAYS USE FORMAT: #XXXXXX
 *
 * there are transparencies calculated throughout app that will break if
 * any other color value type is used, or if format: #XXX is used.
 */

export interface IThemeProps {
  theme: ITheme;
}

const baseColors = {
  error: '#e3350d',
  gray1: '#000000',
  gray2: '#141414',
  gray3: '#282828',
  gray4: '#505050',
  gray5: '#787878',
  gray6: '#bebebe',
  gray7: '#e6e6e6',
  gray8: '#a0a0a0',
  gray9: '#ededed',
};

export const PoisonIvy: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#ff1d8e',
    highlight2: '#ff6ab4',
    primary: '#1dff1d',
    primaryDark: '#00d000',
    primaryLight: '#6aff6a',
  },
};

export const Breeze: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#CF7100',
    highlight2: '#A95B00',
    primary: '#00b4fa',
    primaryDark: '#005577',
    primaryLight: '#49c9fc',
  },
};

export const PinkBerry: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#008080',
    highlight2: '#005959',
    primary: '#CC5490',
    primaryDark: '#7A3256',
    primaryLight: '#FF87C3',
  },
};

export const DangerousIce: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#00ffff',
    highlight2: '#00b3b3',
    primary: '#cc0000',
    primaryDark: '#800000',
    primaryLight: '#ff0000',
  },
};

export const PlumpCandy: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#FF87C3',
    highlight2: '#ff3b9d',
    primary: '#6b0188',
    primaryDark: '#430155',
    primaryLight: '#7f02a1',
  },
};

export const Villain: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#91fc05',
    highlight2: '#74cc02',
    primary: '#0522fc',
    primaryDark: '#0217b2',
    primaryLight: '#5165fd',
  },
};

export const AuroraBorealis: ITheme = {
  colors: {
    ...baseColors,
    highlight1: '#91fc05',
    highlight2: '#74cc02',
    primary: '#bf0b65',
    primaryDark: '#77073f',
    primaryLight: '#f2248b',
  },
};
