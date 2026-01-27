// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // تأكد من استيراد i18n
import './index.css';
import AppInitializer from './components/AppInitializer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <AppInitializer/>
  </React.StrictMode>,
);