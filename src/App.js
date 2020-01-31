import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navbar.components';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
