import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './providers/ProductProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <App />
    </ProductProvider>
);