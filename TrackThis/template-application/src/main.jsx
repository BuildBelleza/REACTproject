// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);





root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
);