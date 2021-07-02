import React, { createContext, ReactNode, useState } from "react";

interface Theme {
  mode: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  theme: Theme;
  changeTheme: (data: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>({mode: 'light'});

  function changeTheme(theme: Theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      { children }
    </ThemeContext.Provider>
  )

}