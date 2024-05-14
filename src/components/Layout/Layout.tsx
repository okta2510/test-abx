import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  <main>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </main>
);

export default Layout;
