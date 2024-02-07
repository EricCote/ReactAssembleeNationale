import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const divRoot = document.getElementById('root');
const reactRoot = createRoot(divRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
