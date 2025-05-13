import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider as ReduxProvider } from "react-redux";
import { ProductProvider } from './providers/ProductProvider.jsx';
import { BrowserRouter } from "react-router-dom"

import './index.css';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <ProductProvider>
                <App />
            </ProductProvider>
        </BrowserRouter>
    </ReduxProvider>
);