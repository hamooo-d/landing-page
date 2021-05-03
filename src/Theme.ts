const SharedValues = {
  primary: {
    main: '#97266D',
    light: '#D53F8C',
  },
}

export const DefaultTheme = {
  ...SharedValues,
  mode: 'light',
  background: '#F7FBFC',
  text: {
    primary: '#000000',
    light: '#646464',
  },
}

export const DarkTheme = {
  ...SharedValues,
  mode: 'dark',
  background: '#1A202C',
  text: {
    primary: '#ffffff',
    light: 'rgba(255,255,255,0.65)',
  },
}
