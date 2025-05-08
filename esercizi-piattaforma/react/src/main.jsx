import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProductProvider } from './providers/ProductProvider.jsx';
import { BrowserRouter } from "react-router-dom"

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProductProvider>
            <App />
        </ProductProvider>
    </BrowserRouter>
);