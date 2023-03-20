import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF4H-8C3Tgpc2PQiKhRb9D0Qy76y4_0Dw",
  authDomain: "hamburguesasreact.firebaseapp.com",
  projectId: "hamburguesasreact",
  storageBucket: "hamburguesasreact.appspot.com",
  messagingSenderId: "334026537165",
  appId: "1:334026537165:web:319e869c2574a2e801d184"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);