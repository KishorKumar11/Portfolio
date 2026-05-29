import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Benign when zooming (Cmd +/-): layout + ResizeObserver in same frame */
const RESIZE_OBSERVER_LOOP =
    /ResizeObserver loop (completed with undelivered notifications|limit exceeded)/;

window.addEventListener(
    'error',
    (event) => {
        if (RESIZE_OBSERVER_LOOP.test(event.message)) {
            event.stopImmediatePropagation();
        }
    },
    true
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);