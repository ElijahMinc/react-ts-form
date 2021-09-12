import React from 'react';
import ReactDOM from 'react-dom';
import '@elastic/eui/dist/eui_theme_light.css';
import { DataProvider } from './context/Context'
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

