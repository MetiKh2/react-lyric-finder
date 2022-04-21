import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./context/LyricContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Provider>
          <App />
      </Provider>
   </BrowserRouter>
  </React.StrictMode>
);
