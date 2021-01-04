import React, { useContext, useState } from 'react';
import Todos from './components/Todos';
import ThemeTogglerButton from './components/ThemeTogglerButton';
import ThemeContext from './context/themeContext';
import themes from './context/theme';


const TodoApp = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Content />
    </ThemeContext.Provider>
  );
};

function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <Todos />
      <ThemeTogglerButton />
    </div>
  );
}

export default TodoApp;


