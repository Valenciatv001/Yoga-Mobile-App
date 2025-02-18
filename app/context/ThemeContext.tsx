import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
};

type Theme = {
  background: string;
  text: string;
  card: string;
  border: string;
  primary: string;
};

const lightTheme: Theme = {
  background: '#F9FAFB',
  text: '#111827',
  card: '#FFFFFF',
  border: '#E5E7EB',
  primary: '#7C3AED',
};

const darkTheme: Theme = {
  background: '#1F2937',
  text: '#F9FAFB',
  card: '#374151',
  border: '#4B5563',
  primary: '#8B5CF6',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Add default export
export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
