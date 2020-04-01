import React from 'react'

export const themes = {
  dark: {
    /// [dark]foreground color
    foreground: '#000000',
    /// [dark]background color
    background: '#eeeeee'
  },
  light: {
    /// [light]foreground color
    foreground: '#ffffff',
    /// [light]background color
    background: '#222222'
  }
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
ThemeContext.displayName = 'Theme2'
