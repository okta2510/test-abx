import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <nav aria-label="Primary site navigation" className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/article-1">Article One</NavLink>
        </li>
        <li>
          <NavLink to="/article-2">Article Two</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
