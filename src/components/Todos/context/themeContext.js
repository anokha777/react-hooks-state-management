import { createContext } from "react";
import themes from './theme';

const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {}
});

export default ThemeContext;