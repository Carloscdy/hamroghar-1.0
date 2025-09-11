import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import GoogleOAuthProvider
import { GoogleOAuthProvider } from '@react-oauth/google';

// ⬇️ Replace this with your own client ID from Google Cloud Console
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Wrap entire app with GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
