import * as React from 'react';
import MainContainer from './Containers/MainContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import '../style.css';

const App = () => {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
};

export default App;
