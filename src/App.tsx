import React from 'react';
import './App.css';
import './styles/reset.css';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import NavBar from 'components/modules/navBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
