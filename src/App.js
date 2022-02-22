import React, {Fragment} from 'react';
import './App.css';

import Header from './pages/Header/Header';
import MuduleRouter from './modules/Routers/MuduleRouter';

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <MuduleRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
