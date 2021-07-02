import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home />
    </ThemeProvider>
  );
}
