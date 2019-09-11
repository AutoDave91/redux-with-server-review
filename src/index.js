import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';
import routes from './routes';

import "./styles.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Letter Maker!</h1>
        {routes}
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
