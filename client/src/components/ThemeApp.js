import React, { useState } from 'react';
import Header from './ThemeHeader';
import Main from './ThemeMain';
import themes from '../themes';

const ThemeApp = () => {
  const [theme, setTheme] = useState('');

  const handleChange = (selectedTheme) => {
    setTheme(themes[selectedTheme.value]);
  };

  const refCallback = (node) => {
    if (node) {
      theme &&
        Object.keys(theme).forEach((element) => {
          node.style.setProperty(element, theme[element], 'important');
          if (element === 'background-color' || element === 'background') {
            // apply the same background mentioned for theme to the body of the website
            document.body.style.background = theme[element];
          }
        });
    }
  };

  return (
    <div ref={refCallback} className="main-section">
      <Header handleChange={handleChange} />
    
    </div>
  );
};

export default ThemeApp;
