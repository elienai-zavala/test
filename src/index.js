import './css/index.scss';
import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

try {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} catch (e) {
  console.log(e);

  const style = {
    'padding': '2em',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  };

  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <div style={style}>
      <h1>404 Error</h1>
      <h2>An Unknown error occurred</h2>
      <h4>Error Message: </h4>
      <h5>{e}</h5>
    </div>
  );
}

