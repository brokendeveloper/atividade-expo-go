import { useState } from 'react';
import { darkTheme, lightTheme, Theme } from '../constants/theme';

interface UseThemeReturn {
  isDarkMode: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

const useTheme = (): UseThemeReturn => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  return { isDarkMode, theme, toggleTheme };
};

export default useTheme;
