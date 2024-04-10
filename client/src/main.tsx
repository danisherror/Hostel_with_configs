import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider, IdProvider, StatusProvider } from "./Auth/Auth"
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <IdProvider>
      <StatusProvider>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </StatusProvider>
    </IdProvider>
  </AuthProvider>,
);