import React from 'react';
// import logo from './logo.svg';

/**
 * We can now import a SVG as a component
 * @see https://create-react-app.dev/docs/adding-images-fonts-and-files#adding-svgs
 */
import { ReactComponent as Logo } from './logo.svg';
import Button from 'components/button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello absolute import button</Button>
      </header>
    </div>
  );
}

export default App;
