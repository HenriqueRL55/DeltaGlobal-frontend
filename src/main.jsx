// React
import { StrictMode } from 'react';

// React DOM
import { createRoot } from 'react-dom/client';

// Application Components
import App from './App.jsx';

// Styles
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
