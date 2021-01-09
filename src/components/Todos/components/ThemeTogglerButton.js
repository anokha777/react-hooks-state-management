import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import themes from '../context/theme';

export default function ThemeTogglerButton() {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () =>{
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return (
    <div className='toggle-button'>
      <label className='switch'>
        <input onClick={toggleTheme} type='checkbox' />
        <span className={`slider round ${theme.background === '#222222' ? 'dark-theme' : 'light-theme'}`}></span>
      </label>
    </div>
  );
}
