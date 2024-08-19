import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Amplify } from 'aws-amplify'; // Use named import for Amplify
import awsExports from './aws-exports';
import App from './App';

Amplify.configure(awsExports); // Configure Amplify with your AWS settings

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
