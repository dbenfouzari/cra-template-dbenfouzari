import React from 'react';
/**
 * We can now import a SVG as a component
 * @see https://create-react-app.dev/docs/adding-images-fonts-and-files#adding-svgs
 */
import { ReactComponent as Logo } from 'logo.svg';
import styles from './home.module.css';

const Home = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Logo className={styles.AppLogo} />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
