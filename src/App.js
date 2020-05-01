import React from "react";
import Routes from './routes/Routes'
import {
  BrowserRouter as Router,Route 
} from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
     <Router>
     <Route   path="/" component={Routes}  />
      </Router>
    </div>
  );
}

export default App;
