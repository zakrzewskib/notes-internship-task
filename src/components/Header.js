import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes['main-header']}>
      <h1>Notes App</h1>
    </header>
  );
};

export default Header;
