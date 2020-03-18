import React, { CSSProperties } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About, Home } from 'pages';

const navStyles: CSSProperties = {
  listStyle: 'none',
  flexDirection: 'row',
  display: 'flex',
};

const listElementStyle: CSSProperties = {
  padding: '0 15px',
};

function App() {
  return (
    <Router>
      <nav>
        <ul style={navStyles}>
          <li style={listElementStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={listElementStyle}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
