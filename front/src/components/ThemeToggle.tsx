import React from 'react';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore'; // Importa useThemeStore

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore(); // Usa useThemeStore
  
  return (
    <Button
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="w-9 h-9 rounded-full"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;