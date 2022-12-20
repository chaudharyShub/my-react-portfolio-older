import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './Components/Context/StateProvider';
import reducer, { initialState } from './Components/Context/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
);

